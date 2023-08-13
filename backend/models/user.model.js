import mongoose from "mongoose";
import bcrypt from "bcryptjs"
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type: String,
        required: [true, "Please enter email address."],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required:[true, "Please enter password."]
    },
    birthdate: {
        type: Date,
        required:[true, "Please enter date of birth."]
    },
    gender: {
        type: String,
        required:[true, "Please enter gender."],
    },
    country: {
        type: String,
        required:[true, "Please enter country."]
    },
    state: {
        type: String,
        required:false
    },
    phone_number: {
        type: String,
        required:[true, "Please enter phone number."]
    },
    phone_number_code: {
        type: String,
        required:[true, "Please enter phone number code."]
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
});

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

