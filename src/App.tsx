import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './component/Todolist/Todolist';
import {v1} from 'uuid';

export type TodoListType = {
    title: string
    tasks: TaskType[]
}

type TaskType = {
    id: string
    title: string
    check: boolean
}


function App() {
    const [todolist, setTodolist] = useState<TodoListType>({
        title: 'What to learn?',
        tasks: [
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
    })

    function removeTask(taskId: string) {
        let newTasks = todolist.tasks.filter(task => task.id !== taskId)

        setTodolist({...todolist,tasks:newTasks})
    }


    return (
        <div className="app">
            <Todolist todolist={todolist}
                      removeTask={removeTask}
            />
        </div>
    );
}

export default App;
