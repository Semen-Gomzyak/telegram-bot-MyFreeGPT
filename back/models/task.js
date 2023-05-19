const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'to_do',
      enum: ['to_do', 'in_progress', , 'done'],
    },
    priority: {
      type: String,
      required: true,
      enum: ['low', 'middle', 'high'],
    },
    expired_at: {
      type: Date,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
