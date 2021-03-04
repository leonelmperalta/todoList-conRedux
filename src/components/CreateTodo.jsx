import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import {addTodo} from "../redux/actions/actions";


const useStyles = makeStyles({
  addTodoForm: {
    gridColumn: "4/6",
    gridRow: "1/2",
    display: "grid",
    gridTemplate: "repeat(4,1fr)/ 1fr 3fr 1fr 1fr",
    maxHeight: "10em",
    marginTop: "10px",
  },
  title: {
    gridColumn: "2/3",
    gridRow: "2/4",
    margin: "0 0 10px 10px",
  },
  button: {
    gridColumn: "3/4",
    gridRow: "3/4",
    margin: "10px 10px 10px 0",
  },
  form: {
    gridColumn: "2/3",
    gridRow: "3/4",
    margin: "10px 10px",
  },
});



const mapDispatchToProps = {
  addTodo,
};





const CreateTodo = (props) => {
  const classes = useStyles();
  const [textContent, setTextContent] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    if(textContent.trim() === "" || textContent.trim() === null || textContent.trim() === undefined){
      alert('Write the ToDo content right');
      return;
    }
    props.addTodo(textContent);
    setTextContent('');
  }

  return (
    <Fragment>
      <Paper className={classes.addTodoForm}>
        <Typography variant="h6" className={classes.title}>
          Add ToDo
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Todo content"
            variant="outlined"
            className={classes.textField}
            multiline
            rowsMax={1}
            size="small"
            name= "todoContent"
            value={textContent}
            onChange={(e) => {setTextContent(e.target.value)}}
          />
        </form>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          size="medium"
          onClick={handleClick}
        >
          Add
        </Button>
      </Paper>
    </Fragment>
  );
};

export default connect(null, mapDispatchToProps)(CreateTodo);
