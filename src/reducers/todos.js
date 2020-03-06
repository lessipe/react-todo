const INITIAL_STATE = {
  todos: [],
  type: 'all'
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          {
            id: action.data.id,
            label: action.data.label,
            done: false
          },
          ...state.todos
        ]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: [
          ...state.todos.map(todo => {
            if (todo.id === action.data.id) {
              return {
                ...todo,
                done: ! todo.done
              };
            } else {
              return todo;
            }
          })
        ]
      };
    case 'CHANGE_TYPE':
      return {
        ...state,
        type: action.data.type
      };
    default:
      return state;
  }
}
