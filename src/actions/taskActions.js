export const addTask = (title) => {
  return {
    type: "ADD_TASK",
    payload: {
      id: new Date().getTime().toString(),
      title,
      completed: false,
    },
  };
};

export const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: {
      id,
    },
  };
};

export const toggleTask = (id) => {
  return {
    type: "TOGGLE_TASK",
    payload: {
      id,
    },
  };
};
export const updateTask = (id, title) => {
  return {
    type: "UPDATE_TASK",
    payload: {
      id,
      title,
    },
  };
};
export const saveTasks = (id, title) => {
  return {
    type: "SAVE_TASKS",
  };
};
export const loadTasks = (tasks) => {
  return {
    type: "LOAD_TASKS",
    payload: tasks,
  };
};
export const searchTasks = (searchTerm) => {
  return {
    type: "SEARCH_TASKS",
    payload: searchTerm,
  };
};
