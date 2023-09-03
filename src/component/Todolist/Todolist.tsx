import React from 'react';
import {TodoListType} from '../../App';
import './Todolist.css';

type PropsType = {
    todolist: TodoListType
    removeTask:(taskId: string)=>void
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
                {props.todolist.task.map((ts) => {
                    return (
                        <li key={ts.id}>
                            <input type="checkbox"/>
                            <span>{ts.title}</span>
                            <button onClick={()=>{props.removeTask(ts.id)}}>x</button>
                        </li>
                    )
                })}
            </ol>
        </div>
    );
};

export default Todolist;
