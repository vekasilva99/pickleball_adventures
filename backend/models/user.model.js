import mongoose from "mongoose";
import bcrypt from "bcryptjs"
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false,
    minLength:[6,'Your password must be longer than 6 characters.'],
    select: false
  },
  birthdate: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum:['Woman','Man','Genderqueer/Non-Binary'],
    required: true
  },
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  phone_number: {
    code: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    }
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  role:{
type:String,
default:'30056'
  },
  reservations:[{
    type: Schema.Types.ObjectId, 
    ref: 'Reservation', 
    default:[]
}],
  active: {
    type: Boolean,
    default: true
  },
  
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, 'yourSecretKey');
  return token;
};
userSchema.pre("save", function (next) {
    const user = this
  
    if (this.isModified("password") || this.isNew) {
      bcrypt.genSalt(10, function (saltError, salt) {
        if (saltError) {
          return next(saltError)
        } else {
          bcrypt.hash(user.password, salt, function(hashError, hash) {
            if (hashError) {
              return next(hashError)
            }
  
            user.password = hash
            next()
          })
        }
      })
    } else {
      return next()
    }
  })

  userSchema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(error, isMatch) {
      if (error) {
        return callback(error)
      } else {
        callback(null, isMatch)
      }
    })
  }

export default mongoose.models.User ||
  mongoose.model("User", userSchema);

