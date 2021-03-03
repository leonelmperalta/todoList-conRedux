import { Button, Card, CardActions, CardContent, Paper, Typography, withStyles } from "@material-ui/core";
import React from "react";

const styles = {
  container: {
    gridRow: "2/6",
    gridColumn: "3/5",
    marginTop: "20px",
  },
};

const TodoList = (props) => {
  const { classes } = props;

  return (
    <Paper className={classes.container}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            benevolent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default withStyles(styles)(TodoList);
