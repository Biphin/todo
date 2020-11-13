const Todo = require("../modals/todo");

const addNewTodo = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  try {
    const todo = new Todo(data);
    const value = await todo.save((error) => {
      if (!error) {
        res.send("Successfully saved the data");
      } else {
        res.send("Sorry couldnt save the data");
      }
    });
    console.log(value);
  } catch (error) {
    console.log(error);
  }
};

const getTodoItems = async (req, res, next) => {
  await Todo.find((error, data) => {
    if (!error) {
      console.log(data);
      return res.json(data);
    } else {
      return res.send(error);
    }
  });
};

const getById = async (req, res, next) => {
  console.log("no data")
  console.log(req.params.id)
  await Todo.findById(req.params.id, (error, data) => {
    if (!error) {
      console.log("no error")
      return res.send(data);
    } else {
      return res.send(error);
    }
  });
};

const deleteById = async (req, res, next) => {
  console.log("here");
  const id = req.params.id;
  await Todo.findByIdAndDelete(id, (error, data) => {
    if (!error) {
      res.send(data);
    } else {
      res.send(error);
    }
  });
};

const updateById = async (req, res, next) => {
  console.log("herrrrr")
  console.log(req.body);
  const id = req.params.id;
  await Todo.findByIdAndUpdate(id, {...req.body}, (error, data) => {
    if (!error) {
      res.send(data);
    } else {
      res.send(error);
    }
  });
}

module.exports = { addNewTodo, getTodoItems, getById, deleteById, updateById };
