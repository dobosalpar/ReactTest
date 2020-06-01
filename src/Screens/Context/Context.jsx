import React, { useState, useCallback, useContext } from 'react';

import TodoElement from '../../Components/TodoElement/TodoElement';
import { TodoContext } from '../../App'

const Context = () => {
  const [todo, setTodo] = useState('');
  
  const todoContext = useContext(TodoContext);
  const { todoList, addTodoItem} = todoContext;

  const handeAddTodo = useCallback(() => {
    addTodoItem(todo)
    setTodo('');
  }, [addTodoItem, todo]);

  return (
    <div>
      {/* Replace the empty array with the todo list */}
      {todoList.map((item, idx) => <TodoElement key={idx} todo={item} />)}
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={handeAddTodo}>Add TODO</button>
    </div>
  )
}

export default Context;
