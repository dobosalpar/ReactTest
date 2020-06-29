import React, { useState, useCallback, useContext } from 'react';

import TodoElement from '../../Components/TodoElement/TodoElement';
import { TodoContext } from '../../App';

const Context = () => {
  const [todo, setTodo] = useState('');
  
  const { todoList, setTodoList } = useContext(TodoContext);

  const handeAddTodo = useCallback(() => {
    setTodoList([...todoList, todo]);
    setTodo(''); 
  }, [setTodoList, todo, todoList]);

  return (
    <div>
      {todoList.map((item) => <TodoElement todo={item} />)}
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={handeAddTodo}>Add TODO</button>
    </div>
  )
}

export default Context;
