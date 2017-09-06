module.exports = (state=[], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.newTodo
      ];

      case 'EDIT_TODO':
        // We need to take the state, and update the specific todo
        // from the action using Array.map.
        return state.map(todo => {
          if (todo.id == action.id) {
            todo.text = action.text;
          }
          return todo;
        });

    case 'SET_TODOS':
      return action.todos;

    case 'REMOVE_TODO':
      return state.filter((todo) => {
        if (todo._id === action.todo_id) {
          return false;
        } else {
          return true;
        }
      });

    default:
      return state;
  }
}
