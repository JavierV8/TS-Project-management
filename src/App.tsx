import React from 'react';
import List from './components/list';
import './App.css';
import Task from './components/task';

function App() {
  return (
    <div className="App">
      <div className="app-menuBar">Hello</div>
      <div className="project-board">
        <List />
        <List />
        <List />
        <List />
        <button className="add-list-button">Add a new list</button>
      </div>
      <Task />
    </div>
  );
}

export default App;
