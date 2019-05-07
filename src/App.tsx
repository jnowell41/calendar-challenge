import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import DayCard from "./components/dayCard";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>My Calendar</h1>
          </header>
        </div>
        <DayCard />
      </Provider>
    );
  }
}

export default App;
