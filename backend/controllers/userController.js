import User from "../models/user.model";


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