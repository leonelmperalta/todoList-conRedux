import { combineReducers } from "redux";
import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY,
  visibilityTypes,
} from "../actions/actions";
const { SHOW_ALL } = visibilityTypes;

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          content: action.content,
          completed: false,
        },
      ];
    case COMPLETE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, { completed: true });
        }
        return todo;
      });
    default:
      return state;
  }
}

function setVisibility(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY:
      return action.visibility;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos,
  setVisibility,
});

export default todoApp;
