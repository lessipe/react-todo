let id = 1;

export function addTodo(label) {
  return {
    type: 'ADD_TODO',
    data: {
      id: id ++,
      label
    }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    data: {
      id
    }
  }
}

export function changeType(type) {
  return {
    type: 'CHANGE_TYPE',
    data: {
      type
    }
  }
}
