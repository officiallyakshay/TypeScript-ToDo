import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos(
        [...todos, { id:Date.now(), todo, isDone: false }
      ])
      setTodo("")
    }
  }
  console.log(todos)

  return (
    <div className="App">
      <span className="heading">Let's Be Productive! 🦄</span>
      <p className="heading2">This todo list is for you to get your work done in an effective and time-efficient manner. Good luck! 🥳</p>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
