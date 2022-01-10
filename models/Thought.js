const { Schema, model } = require('mongoose');


const ThoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true

      },
      createdAt: {
        type: Date,
        default: Date.now
      },
}
  );

  // create the User model
const Thought = model('Thought', ThoughtSchema);

// export the user model
module.exports = Thought;