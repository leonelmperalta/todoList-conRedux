import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { completeTodo } from "../redux/actions/actions";

const useStyles = makeStyles({
  todoPaper: {
    width: "48.7em",
    minHeight: "8.75em",
    maxHeight: "11em",
    margin: "5px 0 5px 0",
    padding: "5px 16px",
  },
  todoContent: {
    display: "block",
    overflowY: "auto",
    maxHeight: "5em",
  },
  todoState: {
    display: "block",
    marginTop: "5px",
  },
  todoCompleteIcon: {
    position: "relative",
    left: "82%",
  },
  todoCompletedText: {
    position: "relative",
    left: "92%",
  },
});

const mapDispatchToProps = {
  completeTodo,
};

const Todo = (props) => {
  const content = props.content;
  const index = props.index;
  const isCompleted = props.isCompleted;
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    props.completeTodo(index);
  };

  return (
    <Paper className={classes.todoPaper} variant="outlined">
      <Typography
        className={classes.todoState}
        variant="subtitle1"
        color="textSecondary"
        gutterBottom
      >
        State: {isCompleted ? "Completed" : "Active"}
      </Typography>
      <Typography variant="body1" className={classes.todoContent} gutterBottom>
        {content}
      </Typography>
      {isCompleted ? (
        <Typography
          variant="button"
          color="textSecondary"
          className={classes.todoCompletedText}
        >
          Done!
        </Typography>
      ) : (
        <Button
          color="primary"
          size="small"
          className={classes.todoCompleteIcon}
          onClick={handleClick}
        >
          Complete todo
        </Button>
      )}
    </Paper>
  );
};

export default connect(null, mapDispatchToProps)(Todo);
