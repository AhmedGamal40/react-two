import '../App/App.css';
import TodoForm from '../Components/TodoForm';
import Task from '../Components/Task';
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    const newTask = {id: Date.now(),description,done: false,};
    setTasks(
      [...tasks,
         newTask
        ]);
  };

  const markAsDone = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className='container'>
      <h1 className='text-center m-3'>To-Do List</h1>
      <TodoForm addTask={addTask} />
      {
      tasks.map((task) => (
        <Task key={task.id} task={task} markAsDone={markAsDone} deleteTask={deleteTask} />
      ))
      }
    </div>
  );
};


export default App;
