import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";

import "./styles.css";

import Form from "./components/Form";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Form />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
