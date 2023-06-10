import React, { Component } from "react";
import { connect } from "react-redux";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { saveTasks } from "./actions/taskActions";

class App extends Component {
  componentWillUnmount() {
    this.props.saveTasks();
  }
  componentDidMount() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      this.props.loadTasks(savedTasks);
    }
  }
  render() {
    return (
      <div className="App">
        <TaskForm />
        <TaskList />
      </div>
    );
  }
}

export default connect(null, { saveTasks })(App);
