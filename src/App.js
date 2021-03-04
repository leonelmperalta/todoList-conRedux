import { CssBaseline } from "@material-ui/core";
import { Fragment } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import TodoApp from "./components/TodoApp";
import todoApp from "./redux/reducers/reducers";

function App() {

  let store = createStore(todoApp,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return (
    <Fragment>
      <CssBaseline />
      <Provider store={store}>
        <TodoApp />
      </Provider>
    </Fragment>
  );
}

export default App;
