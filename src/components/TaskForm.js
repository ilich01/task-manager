import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask, saveTasks } from "../actions/taskActions";

const TaskForm = ({ addTask, saveTasks }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "") return;
    addTask(taskTitle);
    saveTasks();
    setTaskTitle("");
  };

  return (
    <div className="container">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskTitle}
          placeholder="Add your task"
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default connect(null, { addTask, saveTasks })(TaskForm);
