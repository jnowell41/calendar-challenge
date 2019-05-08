import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Header from "./components/header";
import DayCard from "./components/dayCard";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <Header />
        <DayCard />
      </Provider>
    );
  }
}

export default App;
