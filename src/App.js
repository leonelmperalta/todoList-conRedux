import { CssBaseline } from "@material-ui/core";
import { Fragment } from "react";
import TodoApp from "./components/TodoApp";

function App() {

  return (
    <Fragment>
      <CssBaseline />
      <TodoApp />
    </Fragment>
  );
}

export default App;
