import User from "../models/user.model";


export const newUser = async (req, res, next) => {
  console.log("Hola",req.body)
  const user = await User.create(req.body);
  res.status(200).json({
    user,
  });
};

export const login = async (req, res, next) => {
  User.findOne({email: req.body.email}).exec(function(error, user) {
    if (error) {
      callback({error: true})
    } else if (!user) {
      callback({error: true})
    } else {
      user.comparePassword(password, function(matchError, isMatch) {
        if (matchError) {
          callback({error: true})
        } else if (!isMatch) {
          callback({error: true})
        } else {
          callback({success: true})
        }
      })
    }
  })
};