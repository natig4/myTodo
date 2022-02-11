import { FaTimes } from 'react-icons/fa';

import Card from './UI/Card';
import { Button } from './UI/Button';

export const TodoPreview = ({ todo, onRemove, onEdit, onTodo }) => {
  return (
    <Card
      className={`todo-preview-container flex align-center ${
        todo.isDone ? 'done' : ''
      }`}
      onClick={() => {
        onTodo(todo);
      }}>
      <div className='todo-preview flex'>
        <h3>{todo.name}</h3>
        <h4>{todo.description}</h4>
      </div>
      <div className='todo-preview-actions flex align-center'>
        <Button
          onClick={e => {
            onEdit(e, todo);
          }}
          className='todo-edit-btn'
          txt={'Edit'}
        />
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={e => onRemove(e, todo.id)}
        />
      </div>
    </Card>
  );
};
