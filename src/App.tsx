import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './component/Todolist/Todolist';
import {v1} from 'uuid';

export type TodoListType = {
  title: string
  task: TaskType[]
}

type TaskType = {
  id: string
  title: string
  check: boolean
}

const todoList: TodoListType = {
  title: 'What to learn?',
  task: [
    {
      id: v1(),
      title: 'HTML&CSS',
      check: false,
    },
    {
      id: v1(),
      title: 'JS',
      check: false,
    },
    {
      id: v1(),
      title: 'React JS',
      check: false,
    },
    {
      id: v1(),
      title: 'REST API',
      check: false,
    },
  ]
};

function App() {
  return (
    <div className="app">
      <Todolist todolist={todoList}/>
      <Todolist todolist={todoList}/>
      <Todolist todolist={todoList}/>
      <Todolist todolist={todoList}/>
    </div>
  );
}

export default App;
