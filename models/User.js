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
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Email Invalid'],
      },

        thoughts: [
          {
            type: Schema.Types.ObjectId,
            ref: "Thought",
          },
        ],

        friends: [
          {
            type: Schema.Types.ObjectId,
            ref: "User",
          }
        ]
      },
      {
        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
      }

  );

// get total count of friends on retrieval
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

  // create the User model
const User = model('User', UserSchema);

// export the user model
module.exports = User;