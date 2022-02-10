import { useState, useEffect } from 'react';

import { utilService } from '../services/util.service';
import { todoService } from '../services/todo.service';
import { TodoList } from '../cmps/TodoList';
import Card from '../cmps/UI/Card';
import { TodoAdd } from '../cmps/TodoAdd';
import { Button } from '../cmps/UI/Button';

export const TodoApp = () => {
  const [todos, setTodos] = useState();
  const [currTodo, setCurrTodo] = useState();
  const [showNewTodo, setShowNewTodo] = useState();
  const [currUser, setCurrUser] = useState({
    userName: 'nati',
  });

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const todos = await todoService.query();
      setTodos(todos);
    } catch (err) {
      console.log(err);
    }
  };

  const onAddBtn = () => {
    setShowNewTodo(true);
  };
  const onEditBtn = todo => {
    setCurrTodo(todo);
    setShowNewTodo(true);
  };
  const onSave = async todo => {
    await todoService.saveTodo(todo);
    loadTodos();
  };
  const onRemove = todoId => {
    todoService.removeTodo(todoId);
    setTodos(todos.filter(todo => todo._id !== todoId));
  };

  return (
    <>
      {showNewTodo && (
        <TodoAdd
          showNewTodo={setShowNewTodo}
          onSave={onSave}
          todo={currTodo}
          setTodo={setCurrTodo}
        />
      )}
      <Card className='todo-container flex column align-center'>
        <div className='todo-header flex align-center'>
          <h1>
            {`${utilService.capitalizeFirst(currUser?.userName)}'s`} Todos{' '}
          </h1>
          <Button
            onClick={onAddBtn}
            txt={'Add New Todo'}
            className={'add-new-todo-btn'}
          />
        </div>
        {todos?.length > 0 ? (
          <TodoList todos={todos} onRemove={onRemove} onEdit={onEditBtn} />
        ) : (
          <h2>No Todos to show</h2>
        )}
      </Card>
    </>
  );
};
