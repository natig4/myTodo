import { FaTimes } from 'react-icons/fa';

import Card from './UI/Card';
import { Button } from './UI/Button';

export const TodoPreview = ({ todo, onRemove, onEdit, onTodo }) => {
  const classDone = todo.isDone ? 'done' : '';
  return (
    <Card
      className={`todo-preview-container flex align-center ${classDone}`}
      onClick={() => {
        const { id, isDone } = todo;
        onTodo({ id, isDone });
      }}>
      <div className={`todo-preview flex ${classDone}`}>
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
