import React from 'react';
import {TodoListType} from '../../App';
import './Todolist.css';

type PropsType = {
  todolist: TodoListType
}

const Todolist = (props: PropsType) => {
  return (
    <div className="todolist">
      <h2 className="todolist__title">{props.todolist.title}</h2>
      <div className="todolist__form">
        <input className="todolist__input" type="text"/>
        <button className="todolist__add-button">+</button>
      </div>
      <div>
        <button className="todolist__filter-button">All</button>
        <button className="todolist__filter-button">Active</button>
        <button className="todolist__filter-button">Completed</button>
      </div>
      <ol>
        <li>
          <input type="checkbox"/>
          <span>{props.todolist.task[0].title}</span>
          <button>x</button>
        </li>
        <li>
          <input type="checkbox"/>
          <span>{props.todolist.task[1].title}</span>
          <button>x</button>
        </li>
        <li>
          <input type="checkbox"/>
          <span>{props.todolist.task[2].title}</span>
          <button>x</button>
        </li>
        <li>
          <input type="checkbox"/>
          <span>{props.todolist.task[3].title}</span>
          <button>x</button>
        </li>
      </ol>
    </div>
  );
};

export default Todolist;
