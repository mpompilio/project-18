const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
          },
          reactionBody: {
            type: String
          },
          username: {
            type: String
          },
          createdAt: {
            type: Date,
            default: Date.now,
          }

    }
)

const ThoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true

      },

      username: {
        type: String,
        required: true,
        ref: 'User'
    },
    
      createdAt: {
        type: Date,
        default: Date.now
      },

      reactions: [ReactionSchema]
      

},
{
toJSON: {
  virtuals: true,
  getters: true
},
id: false
}
  );

  ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

  // create the User model
const Thought = model('Thought', ThoughtSchema);



module.exports = Thought;