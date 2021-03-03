import { withStyles } from "@material-ui/core";
import React from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

const styles = {
    container:{
        display: 'grid',
        gridTemplateColumns: '1fr repeat(4, 2fr) 1fr',
        gridTemplateRows: '1fr repeat(4, 2fr) 1fr',
        height: '100vh',
    },
};

const TodoApp = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <CreateTodo />
      <TodoList />
    </div>
  );
};

export default withStyles(styles)(TodoApp);
