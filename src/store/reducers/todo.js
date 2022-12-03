import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SORT_TODO } from "../actions/types/todo";

const initialState = {
  allIds: [],
  byIds: {},
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;

      return {
        ...state,

        allIds: [...state.allIds, id],
        
        byIds: {
          ...state.byIds,

          [id]: {
            content,
            completed: false,
          },
        },
      };
    }

    case TOGGLE_TODO: {
      const {id} = action.payload;

      const targetTodo = state.byIds[id];

      return {
        ...state,

        byIds: {
          ...state.byIds,
          [id]: {
            ...targetTodo,
            completed: !targetTodo.completed,
          },
        },
      };

    }
    case SORT_TODO: {
      const {sortedIds} = action.payload;

  
      return {
        ...state,
        allIds: [ ...sortedIds],
     }}
    case DELETE_TODO: {
      const {id} = action.payload;

      return {
        ...state,

        allIds: [...state.allIds.filter(item => item !== id)],
      };

    }

    default:
      return state;
  }
}
