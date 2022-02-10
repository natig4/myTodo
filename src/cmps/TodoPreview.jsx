import { FaTimes } from 'react-icons/fa';

import Card from './UI/Card';
import { Button } from './UI/Button';

export const TodoPreview = ({ todo, onRemove, onEdit }) => {
  return (
    <Card className='todo-preview-container flex align-center'>
      <div className='todo-preview'>
        <h3>{todo.title}</h3>
      </div>
      <div className='todo-preview-actions flex align-center'>
        <Button
          onClick={() => {
            onEdit(todo);
          }}
          className='todo-edit-btn'
          txt={'Edit'}
        />
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onRemove(todo._id)}
        />
      </div>
    </Card>
  );
};