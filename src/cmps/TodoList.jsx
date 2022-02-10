import { TodoPreview } from './TodoPreview';

export const TodoList = ({ todos, onRemove, onEdit }) => {
  return (
    <div className='todo-list-container flex column align-center justify-center'>
      {todos.map(todo => (
        <TodoPreview
          key={todo._id}
          todo={todo}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};
