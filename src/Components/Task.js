import React from 'react';
import { Button } from 'react-bootstrap';

const Task = ({ task, markAsDone, deleteTask }) => {
    const DoneClick = () => {
      markAsDone(task.id);
    };
  
    const DeleteClick = () => {
      deleteTask(task.id);
    };
  
    return (
      <div className='text-center'>
        <span style={{ textDecoration: task.done ? 'line-through' : 'none' }} className='m-2'>
          {task.description}
        </span>
        <Button className="btn btn-success m-2" size="sm" onClick={DoneClick}>
          Mark as Done
        </Button>
        <Button variant="danger m-2" size="sm" onClick={DeleteClick}>
          Delete
        </Button>
      </div>
    );
  };

export default Task;
