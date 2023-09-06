import React from 'react';
import {FilterValueType, TaskType} from '../../App';
import './Todolist.css';

type PropsType = {
  title: string
  tasks: Array<TaskType>
  filter: FilterValueType
  removeTask: (taskId: string) => void
  setFilteredTasks: (value: FilterValueType) => void
}

const Todolist = (props: PropsType) => {
  return (
    <div className="todolist">
      <h2 className="todolist__title">{props.title}</h2>
      <div className="todolist__form">
        <input className="todolist__input" type="text"/>
        <button className="todolist__add-button">+</button>
      </div>
      <div>
        <button className="todolist__filter-button" onClick={() => props.setFilteredTasks('All')}>All</button>
        <button className="todolist__filter-button" onClick={() => {
          props.setFilteredTasks('Active')
        }}>Active</button>
        <button className="todolist__filter-button" onClick={() => {
          props.setFilteredTasks('Completed')
        }}>Completed</button>
      </div>
      <ol>
        {props.tasks.map((ts) => {
          return (
            <li key={ts.id}>
              <input type="checkbox"/>
              <span>{ts.title}</span>
              <button onClick={() => {
                props.removeTask(ts.id)
              }}>x
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  );
};

export default Todolist;
