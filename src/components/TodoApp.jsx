import { makeStyles } from "@material-ui/core";
import React from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

const useStyles = makeStyles({
    container:{
        display: 'grid',
        gridTemplateColumns: '1fr repeat(6, 2fr) 1fr',
        gridTemplateRows: '1fr repeat(5, 2fr) 1fr',
        height: '100vh',
    },
});

const TodoApp = () => {
  const  classes  = useStyles();
  return (
    <div className={classes.container}>
      <CreateTodo />
      <TodoList />
    </div>
  );
};

export default TodoApp;
