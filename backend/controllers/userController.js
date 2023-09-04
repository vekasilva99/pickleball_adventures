import User from "../models/user.model";
import crypto from "crypto";
const sendEmail = require("../utils/email/sendEmail");
import bcrypt from "bcryptjs"
import Token from "../models/token.model"


export const newUser = async (req, res, next) => {
  const { email } = req.body;


  try {
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: 'User with the same email already exists' });
    }

    // Create a new user
    const user = await User.create(req.body);
    res.status(200).json({
      user,
    });


  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


export const login = async (req,res,next)=>{
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'Incorrect email or password.' });
    }

    user.comparePassword(password, function(matchError, isMatch) {
      if (matchError) {
        return res.status(401).json({ error: 'Incorrect email or password' });
      } else if (!isMatch) {
        return res.status(401).json({ error: 'Incorrect email or password' });
      } else {
        const token = user.generateAuthToken();
        console.log(token);
        res.status(200).json({
          token,
          user
        });
       
      }
    })
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export const getUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    users,
  });
};

export const requestPasswordReset = async (email) => {

  const user = await User.findOne({ email });

  if (!user) throw new Error("User does not exist");
  let token = await Token.findOne({ userId: user._id });
  if (token) await token.deleteOne();
  let resetToken = crypto.randomBytes(32).toString("hex");
  const hash = await bcrypt.hash(resetToken, Number(10));

  await new Token({
    userId: user._id,
    token: hash,
    createdAt: Date.now(),
  }).save();

  const link = `http://localhost:3000/passwordReset?token=${resetToken}&id=${user._id}`;
  sendEmail(user.email,"You're all booked! Get ready for your adventure",{name: user.first_name,link: link,},"newUser");
  return link;
};

export const resetPassword = async (req, res, next) => {
  const { userId, token, password } = req.body;
  let passwordResetToken = await Token.findOne({ userId });
  if (!passwordResetToken) {
    return res.status(404).json({ error: 'Invalid or expired password reset token.' });
  }
  const isValid = await bcrypt.compare(token, passwordResetToken.token);
  if (!isValid) {
    return res.status(404).json({ error: 'Invalid or expired password reset token.' });
  }
  const hash = await bcrypt.hash(password, Number(10));
  User.findByIdAndUpdate(
    {_id: userId}, 
    {
      password:hash
    }, 
    {
      returnOriginal: false, 
      useFindAndModify: false 
    }).then(async(data) => {
      await passwordResetToken.deleteOne();
      return res.status(200).json({
        success: true,
        message: "Password changed succesfully."
      })
    })
    .catch(err => {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error"
      })
    });

};