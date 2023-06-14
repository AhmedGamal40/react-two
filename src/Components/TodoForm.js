import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

// 


const TodoForm = ({ addTask }) => {
    const [task, setTask] = useState('');
  
    const AddSubmit = (add) => {
      add.preventDefault();
      if (task.trim() !== '') {
        addTask(task);
        setTask('');
      }
    };
  
    return (
      <Form onSubmit={AddSubmit} className='contaneir'>
        <Form.Group controlId="taskInput">
          <Form.Control type="text" placeholder="Enter task description" value={task}
            onChange={(e) => setTask(e.target.value)}  />
        </Form.Group>
        <Button className="btn btn-primary mt-2" type="submit"> Add </Button>
      </Form>
    );
  };

export default TodoForm;
