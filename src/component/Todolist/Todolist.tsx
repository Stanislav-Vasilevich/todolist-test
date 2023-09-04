import React, {useState} from 'react';
import {TodoListType} from '../../App';
import './Todolist.css';



type FilterValueType = 'All' | 'Active' | 'Completed'
type PropsType = {
    todolist: TodoListType
    removeTask:(taskId: string)=>void
}


const Todolist = (props: PropsType) => {
    const [filter, setFilter] = useState<FilterValueType>('Completed')

    let filterTaskType = props.todolist.tasks

    if (filter === 'Active') {
        let filterTaskType = props.todolist.tasks.filter(t => t.check === false)
    }
    if (filter === 'Completed') {
        let filterTaskType = props.todolist.tasks.filter(t => t.check === true)

    }
    console.log(filterTaskType)
    console.log(filter)


    return (
        <div className="todolist">
            <h2 className="todolist__title">{props.todolist.title}</h2>
            <div className="todolist__form">
                <input className="todolist__input" type="text"/>
                <button className="todolist__add-button">+</button>
            </div>
            <div>
                <button className="todolist__filter-button" onClick={()=>{setFilter('All')}}>All</button>
                <button className="todolist__filter-button" onClick={()=>{setFilter('Active')}}>Active</button>
                <button className="todolist__filter-button" onClick={()=>{setFilter('Completed')}}>Completed</button>
            </div>
            <ol>
                {filterTaskType.map((ts) => {
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
