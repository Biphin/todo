const { mongo } = require("mongoose");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const todoSchema = new mongoose.Schema(
  {
    todo: { type: String, required: true, uppercase: true },
    completionTime: { type: Number, default: 8 },
    status: { type: String, default: "created" },
    timeEntered: {type: Boolean, required: true},
    completedTime: {type: Date, required: false},
    isCompledInTime: {type: Boolean, required: false},
    differenceInTime: {type: Number, required: false},
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;

//createdAt and updatedAt
