const express = require("express");
const todoController = require("../controller/todoController");

const router = express.Router();

router.post("/todos", todoController.addNewTodo)
router.get("/todos", todoController.getTodoItems)
router.get("/todo/:id", todoController.getById)
router.delete("/todo/:id", todoController.deleteById)
router.patch("/todo/:id", todoController.updateById)

module.exports = router;