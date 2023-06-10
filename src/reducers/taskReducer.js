const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return {
        ...state,
        tasks: newTasks,
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, title: action.payload.title }
            : task
        ),
      };
    case "SAVE_TASKS":
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
      return state;
    case "LOAD_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "SEARCH_TASKS":
      const searchTerm = action.payload.toLowerCase();
      const filteredTasks = state.tasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm)
      );
      return {
        ...state,
        filteredTasks,
      };

    default:
      return state;
  }
};

export default taskReducer;
