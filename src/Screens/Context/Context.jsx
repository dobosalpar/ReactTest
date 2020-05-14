import React, { useState, useCallback } from 'react';

import TodoElement from '../../Components/TodoElement/TodoElement';
// Import the context here

const Context = () => {
  const [todo, setTodo] = useState('');
  
  // Get the needed values from the context here

  const handeAddTodo = useCallback(() => {
    setTodo('');
    // You should update the todo list here
  }, []);

  return (
    <div>
      {/* Replace the empty array with the todo list */}
      {[].map((item) => <TodoElement todo={item} />)}
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={handeAddTodo}>Add TODO</button>
    </div>
  )
}

export default Context;
