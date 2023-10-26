import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editTodo, setEditTodo] = useState(null);
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      if (editTodo !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editTodo] = newTodo;
        setTodos(updatedTodos);
        setEditTodo(null);
      } else {

        setTodos([...todos, newTodo]);
      }
      setNewTodo('');
    }
  };
  const editTodoItem = (index) => {
    setEditTodo(index);
    setNewTodo(todos[index]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo Uygulaması</h1>
      <div className="input-container">
        <TextField id="standard-basic" label="TODO" variant="standard" value={newTodo} onChange={handleInputChange} />
        <Button variant="contained" color="success" onClick={addTodo} ick={addTodo}>{editTodo !== null ? 'Güncelle' : 'Ekle'}
        </Button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <Button variant="outlined" color="secondary" onClick={() => editTodoItem(index)}>Düzenle</Button>
            <Button variant="outlined" color="error" onClick={() => deleteTodo(index)}>Sil</Button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
