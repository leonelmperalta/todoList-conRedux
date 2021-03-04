import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { visibilityTypes } from "../redux/actions/actions";
import Todo from "./Todo";
import VisibilitySwitcher from "./VisibilitySwitcher";

const useStyles = makeStyles({
  container: {
    gridRow: "2/7",
    gridColumn: "3/7",
    marginTop: "20px",
    display: "grid",
    gridTemplateRows: "5em 1fr",
  },
  todosContainer: {
    gridRow: "2/3",
    margin: "1em 1em",
    overflowY: 'auto',
  },
  noTodosText: {
    textAlign: 'center',
    marginTop: '50px',
  }
});

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    visibilityType: state.setVisibility,
  };
};

const TodoList = (props) => {
  const classes = useStyles();
  const { todos, visibilityType } = props;

  const filterTodosByVisibility = (todos) => {
    if(visibilityType === visibilityTypes.SHOW_ACTIVE){
      return todos.filter((todo) => !todo.completed);
    }
    else if(visibilityType === visibilityTypes.SHOW_COMPLETED){
      return todos.filter((todo) => todo.completed);
    }
    else{
      return todos;
    }
  }

  return (
    <Paper className={classes.container}>
      <VisibilitySwitcher />
      <div className={classes.todosContainer}>
        {todos.length === 0 ? (
          <Typography variant="h6" className={classes.noTodosText}>No todos left, Its fun time!</Typography>
        ) : (
          filterTodosByVisibility(todos).map((todo, index) => {
            return <Todo index={index} content={todo.content} isCompleted={todo.completed}/>;
          })
        )}
      </div>
    </Paper>
  );
};

export default connect(mapStateToProps)(TodoList);
