import React, {useState} from 'react';
import './App.css';
import Todolist from './component/Todolist/Todolist';
import {v1} from 'uuid';

export type TodoListType = {
  title: string
  tasks: TaskType[]
}
export type TaskType = {
  id: string
  title: string
  check: boolean
}
export type FilterValueType = 'All' | 'Active' | 'Completed'

function App() {
  const [todolist, setTodolist] = useState<TodoListType>({
    title: 'What to learn?',
    tasks: [
      {
        id: v1(),
        title: 'HTML&CSS',
        check: true,
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
  const [filter, setFilter] = useState<FilterValueType>('All')

  function removeTask(taskId: string) {
    const newTasks = todolist.tasks.filter(task => task.id !== taskId)

    setTodolist({...todolist, tasks: newTasks})
  }

  let filterTaskType = todolist.tasks

  if (filter === 'Active') {
    filterTaskType = todolist.tasks.filter(t => !t.check)
  }

  if (filter === 'Completed') {
    filterTaskType = todolist.tasks.filter(t => t.check)
  }

  function setFilteredTasks(value: FilterValueType) {
    setFilter(value);
  }

  return (
    <div className="app">
      <Todolist
        title={todolist.title}
        tasks={filterTaskType}
        filter={filter}
        removeTask={removeTask}
        setFilteredTasks={setFilteredTasks}
      />
    </div>
  );
}

export default App;
