import React from "react";
import logo from "./logo.svg";
import Navbar from "./navbar";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import "./App.css";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import SimpleForm from "./SimpleForm";

function App() {
  return (
    <React.Fragment>
      <div className="App1">
        <div className="Navibar">
          <Navbar></Navbar>
        </div>
        <header className="App-header">
          <p>ADD EVENTS</p>
        </header>
      </div>
      <div className="App2">
        <header className="App-table">
          <Provider store={store}>
            <div style={{ padding: 50 }}>
              <SimpleForm onSubmit={showResults} />
            </div>
          </Provider>
        </header>
      </div>
    </React.Fragment>
  );
}
{
  /*const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: "green",
    width: "40%",
    height: 40
  },
  TextBoxComponent: {
    backgroundColor: "green",
    width: "40%",
    height: 40
  }
});*/
}
export default App;
