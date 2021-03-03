import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import React, { Fragment } from "react";

const styles = {
  addTodoForm: {
      gridColumn: '3/5',
      gridRow: '1/2',
      display: 'grid',
      gridTemplate: 'repeat(4,1fr)/ 1fr 3fr 1fr 1fr',
      maxHeight: '10em',
      marginTop: '10px',
  },
  title:{
    gridColumn: '2/3',
    gridRow: '2/4',
    margin: '0 0 10px 10px' 
  },
  button: {
    gridColumn: '3/4',
    gridRow: '3/4',
    margin: '10px 10px 10px 0',
  },
  form: {
    gridColumn: '2/3',
    gridRow: '3/4',
    margin: '10px 10px'
  }
};

const CreateTodo = (props) => {
  const { classes } = props;

  return (
    <Fragment>
      <Paper className={classes.addTodoForm}>
        <Typography variant="h6" className={classes.title}>Add ToDo</Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Todo content" variant="outlined" className={classes.textField} size="small"/>
        </form>
        <Button variant="contained" color="primary" className={classes.button} size= "medium">
          Add
        </Button>
      </Paper>
    </Fragment>
  );
};

export default withStyles(styles)(CreateTodo);
