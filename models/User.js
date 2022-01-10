const { Schema, model } = require('mongoose');


const UserSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true

      },
      email: {
        type: String,
        required: true,
        unique: true,

        thoughts: [],

        friends: []
      },
}
  );

  // create the User model
const User = model('User', UserSchema);

// export the user model
module.exports = User;