import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { setVisibility, visibilityTypes } from "../redux/actions/actions";


const useStyles = makeStyles({
    formControl: {
        gridRow: '1/2',
        justifySelf:'center',
        minWidth: '10em',
        marginTop: '1em'
    }
})

const mapDispatchToProps = {
    setVisibility,
}

const VisibilitySwitcher = (props) => {
  const  classes  = useStyles();

  return (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" >Show todos</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value=""
          onChange={(e) => {props.setVisibility(e.target.value)}}
        >
          <MenuItem value={visibilityTypes.SHOW_ALL}>Show All</MenuItem>
          <MenuItem value={visibilityTypes.SHOW_COMPLETED}>Show Completed</MenuItem>
          <MenuItem value={visibilityTypes.SHOW_ACTIVE}>Show Active</MenuItem>
        </Select>
      </FormControl>
  );
};

export default connect(null,mapDispatchToProps)(VisibilitySwitcher);
