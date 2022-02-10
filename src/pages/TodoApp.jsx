import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { createTodo, updateTodo, deleteTodo } from '../graphql/mutations';
import { listTodos } from '../graphql/queries';

import { utilService } from '../services/util.service';
import { TodoList } from '../cmps/TodoList';
import Card from '../cmps/UI/Card';
import { TodoAdd } from '../cmps/TodoAdd';
import { Button } from '../cmps/UI/Button';

const TodoApp = () => {
  const [todos, setTodos] = useState();
  const [currTodo, setCurrTodo] = useState();
  const [showNewTodo, setShowNewTodo] = useState();
  const [user, setUser] = useState(API.Auth.user.username);

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

  const onAddBtn = todo => {
    todo && setCurrTodo(todo);
    setShowNewTodo(true);
  };
  const onSave = async todo => {
    const updatedTodo = { ...todo, user };
    console.log(updatedTodo);
    try {
      await API.graphql(
        graphqlOperation(todo?.id ? updateTodo : createTodo, { input: todo })
      );
      loadTodos();
    } catch (err) {
      console.log('error creating todo:', err);
    }
  };
  const onRemove = async id => {
    try {
      await API.graphql(graphqlOperation(deleteTodo, { input: { id } }));
    } catch (err) {
      console.log('error creating todo:', err);
    }
    loadTodos();
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
          <h1>{`${utilService.capitalizeFirst(user)}'s`} Todos </h1>
          <Button
            onClick={onAddBtn}
            txt={'Add New Todo'}
            className={'add-new-todo-btn'}
          />
        </div>
        {todos?.length > 0 ? (
          <TodoList todos={todos} onRemove={onRemove} onEdit={onAddBtn} />
        ) : (
          <h2>No Todos to show</h2>
        )}
      </Card>
    </>
  );
};
export default withAuthenticator(TodoApp);
