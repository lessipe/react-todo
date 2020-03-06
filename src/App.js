import React from 'react';
import reducer from './reducers';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import './App.css';

import AppHeader from "./components/AppHeader";
import UserInput from "./components/UserInput";
import TodoList from "./components/TodoList";
import TypeButtons from "./components/TypeButtons";

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <AppHeader />
          <UserInput />
          <TodoList />
          <TypeButtons />
        </div>
      </Provider>
    );
  }
}
