import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import Card from './UI/Card';
import { Button } from './UI/Button';
import { Backdrop } from './UI/Backdrop';

export const TodoAdd = ({ showNewTodo, onSave, todo, setTodo }) => {
  const [title, setTitle] = useState(todo?.title || '');

  const onSubmit = e => {
    e.preventDefault();
    if (!title) {
      console.log('Enter a Todo title please');
      return;
    }
    if (todo) {
      onSave({ ...todo, title });
    } else {
      onSave({ title });
    }
    setTitle('');
    onCloseAddTodo();
  };
  const onCloseAddTodo = () => {
    showNewTodo(false);
    setTodo('');
  };
  return (
    <>
      <Card className='new-todo flex column align-center'>
        <h1>Add a Todo </h1>
        <form
          className='new-todo-form flex column align-center'
          onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Todo Name'
            value={title}
            onChange={e => setTitle(e.target.value)}></input>
          <Button
            onClick={onSubmit}
            txt={'Save Todo'}
            className='new-todo-form-btn'></Button>
        </form>
        <FaTimes style={{ cursor: 'pointer' }} onClick={onCloseAddTodo} />
      </Card>
      <Backdrop onClick={onCloseAddTodo} />
    </>
  );
};
