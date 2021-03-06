import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import Card from './UI/Card';
import { Button } from './UI/Button';
import { Backdrop } from './UI/Backdrop';

export const TodoAdd = ({ showNewTodo, onSave, todo, setTodo }) => {
  const initialState = { name: '', description: '' };
  const [formState, setFormState] = useState(todo || initialState);

  const onSubmit = e => {
    e.preventDefault();
    if (!formState?.name) {
      alert('Enter a Todo title please');
      return;
    }
    if (todo) var { id } = todo;
    const { name, description } = formState;
    onSave(todo ? { id, name, description } : formState);
    setFormState(initialState);
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
            value={formState.name || ''}
            onChange={e =>
              setFormState({ ...formState, name: e.target.value })
            }></input>
          <input
            type='text'
            placeholder='Todo Description'
            value={formState.description || ''}
            onChange={e =>
              setFormState({ ...formState, description: e.target.value })
            }></input>
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
