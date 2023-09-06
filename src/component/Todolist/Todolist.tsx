import React, {Dispatch, SetStateAction, useState} from 'react';
import {TodoListType} from '../../App';
import './Todolist.css';


type FilterValueType = 'All' | 'Active' | 'Completed'

type PropsType = {
    todolist: TodoListType
    removeTask: (taskId: string) => void
    setFilter: (newTodolist: TodoListType) => void
}


const Todolist = (props: PropsType) => {
    const [filter, setFilter] = useState<FilterValueType>('All')

    let filterTaskType =  props.todolist.tasks
    if (filter === 'All') {
         filterTaskType = props.todolist.tasks
        props.setFilter({...props.todolist})
    }

    if (filter === 'Active') {
        filterTaskType = props.todolist.tasks.filter(t => !t.check)
        props.setFilter({...props.todolist, tasks: filterTaskType})
    }

    if (filter === 'Completed') {
         filterTaskType = props.todolist.tasks.filter(t => t.check)
        props.setFilter({...props.todolist, tasks: filterTaskType})
    }


    return (
        <div className="todolist">
            <h2 className="todolist__title">{props.todolist.title}</h2>
            <div className="todolist__form">
                <input className="todolist__input" type="text"/>
                <button className="todolist__add-button">+</button>
            </div>
            <div>
                <button className="todolist__filter-button" onClick={() => {
                    setFilter('All')
                }}>All
                </button>
                <button className="todolist__filter-button" onClick={() => {
                    setFilter('Active')
                }}>Active
                </button>
                <button className="todolist__filter-button" onClick={() => {
                    setFilter('Completed')
                }}>Completed
                </button>
            </div>
            <ol>
                {filterTaskType.map((ts) => {
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
