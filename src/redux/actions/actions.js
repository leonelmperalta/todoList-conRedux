//action types
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY = 'SET_VISIBILITY';

//visibility types

export const visibilityTypes = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}


// actions creators
export function addTodo(content) {
    return {
        type: ADD_TODO,
        content
    }
}

export function completeTodo(index) {
    return {
        type: COMPLETE_TODO,
        index
    }
}


export function setVisibility(visibility){
    return {
        type: SET_VISIBILITY,
        visibility
    }
}
 

