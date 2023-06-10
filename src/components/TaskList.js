import React, { useState } from "react";
import { connect } from "react-redux";
import {
  deleteTask,
  updateTask,
  toggleTask,
  saveTasks,
  searchTasks,
} from "../actions/taskActions";
import "../index.css";
const TaskList = ({
  tasks,
  filteredTasks,
  deleteTask,
  updateTask,
  toggleTask,
  saveTasks,
  searchTasks,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [sortType, setSortType] = useState("date");
  const handleDelete = (id) => {
    deleteTask(id);
    saveTasks();
  };
  const handleSort = (type) => {
    setSortType(type);
  };
  const sortTasks = (a, b) => {
    if (sortType === "date") {
      return a.dateAdded - b.dateAdded;
    } else if (sortType === "status") {
      return a.completed - b.completed;
    }
    return 0;
  };

  const handleUpdate = (id, title) => {
    const newTitle = prompt("Enter new title", title);
    if (newTitle) {
      updateTask(id, newTitle);
      saveTasks();
    }
  };

  const handleToggle = (id) => {
    toggleTask(id);
    saveTasks();
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    searchTasks(value);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search tasks"
        value={searchValue}
        onChange={handleSearch}
        className="search-input"
      />
      <h2>Task List</h2>
      <div className="sort-buttons">
        <button
          onClick={() => handleSort("date")}
          className={sortType === "date" ? "active" : ""}
        >
          Sort by Date
        </button>
        <button
          onClick={() => handleSort("status")}
          className={sortType === "status" ? "active" : ""}
        >
          Sort by Status
        </button>
      </div>
      <ul className="task-list">
        {searchValue !== ""
          ? filteredTasks.map((task) => (
              <li
                key={task.id}
                className={`task ${task.completed ? "completed" : ""}`}
              >
                <span className="title">{task.title}</span>
                <div className="actions">
                  <button onClick={() => handleToggle(task.id)}>
                    {task.completed ? "✅" : "Done"}
                  </button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                  <button onClick={() => handleUpdate(task.id, task.title)}>
                    Edit
                  </button>
                </div>
              </li>
            ))
          : tasks.sort(sortTasks).map((task) => (
              <li
                key={task.id}
                className={`task ${task.completed ? "completed" : ""}`}
              >
                <span className="title">{task.title}</span>
                <div className="actions">
                  <button onClick={() => handleToggle(task.id)}>
                    {task.completed ? "✅" : "Done"}
                  </button>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                  <button onClick={() => handleUpdate(task.id, task.title)}>
                    Edit
                  </button>
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    filteredTasks: state.tasks.filteredTasks,
  };
};

export default connect(mapStateToProps, {
  deleteTask,
  updateTask,
  toggleTask,
  saveTasks,
  searchTasks,
})(TaskList);
