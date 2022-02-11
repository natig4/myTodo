import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { API, graphqlOperation } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo } from '../graphql/mutations';
import { listTodos } from '../graphql/queries';

import { utilService } from '../services/util.service';
import { TodoList } from '../cmps/TodoList';
import { LoginMsg } from '../cmps/LoginMsg';
import { TodoAdd } from '../cmps/TodoAdd';
import Card from '../cmps/UI/Card';
import { Button } from '../cmps/UI/Button';

const TodoApp = () => {
  const [todos, setTodos] = useState();
  const [currTodo, setCurrTodo] = useState();
  const [showNewTodo, setShowNewTodo] = useState();

  const user = useSelector(state => state.user);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos));
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log(err);
    }
  };

  const onTodo = todo => {
    console.log(todo);
  };

  const onAddBtn = (e, todo) => {
    e.stopPropagation();
    todo && setCurrTodo(todo);
    setShowNewTodo(true);
  };

  const onSave = async todo => {
    try {
      await API.graphql(
        graphqlOperation(todo?.id ? updateTodo : createTodo, { input: todo })
      );
      loadTodos();
    } catch (err) {
      console.log('error creating todo:', err);
    }
  };

  const onRemove = async (e, id) => {
    e.stopPropagation();
    try {
      await API.graphql(graphqlOperation(deleteTodo, { input: { id } }));
    } catch (err) {
      console.log('error creating todo:', err);
    }
    loadTodos();
  };

  return !user ? (
    <LoginMsg />
  ) : (
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
          <h1>{`${utilService.capitalizeFirst(user)}'s`} Todos </h1>
          <Button
            onClick={onAddBtn}
            txt={'Add New Todo'}
            className={'add-new-todo-btn'}
          />
        </div>
        {todos?.length > 0 ? (
          <TodoList
            todos={todos}
            onRemove={onRemove}
            onEdit={onAddBtn}
            onTodo={onTodo}
          />
        ) : (
          <h2>No Todos to show</h2>
        )}
      </Card>
    </>
  );
};

export default TodoApp;
