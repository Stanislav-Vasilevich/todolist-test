import React from 'react';
import {FilterValueType, TaskType} from '../../App';
import './Todolist.css';
import s from './Todolist.module.css'

type PropsType = {
  title: string
  tasks: Array<TaskType>
  filter: FilterValueType
  removeTask: (taskId: string) => void
  setFilteredTasks: (value: FilterValueType) => void
}

const Todolist = (props: PropsType) => {
  return (
    <div className={s.todolist}>
      <h2 className={s.todolist__title}>{props.title}</h2>
      <div className={s.todolist__form}>
        <input className={s.todolist__input} type="text"/>
        <button className={s.todolist__addButton}>+</button>
      </div>
      <div>
        <button className={props.filter ==='All'? s.todolist__filterButton +' '+ s.todolist__filterButton_active: s.todolist__filterButton} onClick={() => props.setFilteredTasks('All')}>All</button>
        <button className={s.todolist__filterButton} onClick={() => {
          props.setFilteredTasks('Active')
        }}>Active</button>
        <button className={s.todolist__filterButton} onClick={() => {
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
