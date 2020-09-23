import React, { useState, useCallback, useContext } from 'react';

import ToDoElement from '../../Components/TodoElement/TodoElement';
import { ToDoContext } from '../../App';

const Context = () => {
  const [toDo, setToDo] = useState('');
  
  const { toDoList, setToDoList } = useContext(ToDoContext);
  const handleAddToDo = useCallback(() => {
    setToDoList([...toDoList, toDo]);
    setToDo(''); 
  }, [setToDoList, toDo, toDoList]);

  return (
    <div>
      {toDoList.map((item) => <ToDoElement toDo={item} />)}
      <input type="text" value={toDo} onChange={e => setToDo(e.target.value)} />
      <button onClick={handleAddToDo}>Add TODO</button>
    </div>
  )
}

export default Context;
