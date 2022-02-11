import { TodoPreview } from './TodoPreview';

export const TodoList = ({ todos, onRemove, onEdit, onTodo }) => {
  return (
    <div className='todo-list-container flex column align-center justify-center'>
      {todos.map(todo => (
        <TodoPreview
          onTodo={onTodo}
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};
