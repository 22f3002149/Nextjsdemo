/* Create a To do list in Next.js

- add items to do in the list
- delve items from the list
*/

import React, { useState } from 'react';
import Head from 'next/head';
import link from 'next/link';
import {v4 as uuidv4} from 'uuid';

export default function Home() {
// create state for to do list with default items like: learn next.js, learn react.js, learn copilot
  const [todoList, setTodoList] = useState([
    { id: uuidv4(), name: 'Learn Next.js', completed: false },
    { id: uuidv4(), name: 'Learn React.js', completed: false },
    { id: uuidv4(), name: 'Learn Copilot', completed: false },
  ]);

  // create state for to do items
  const [todoItem, setTodoItem] = useState('');

  // function that handles adding new items to list
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoItem.trim() === '') return;
    setTodoList([...todoList, { id: uuidv4(), name: todoItem, completed: false }]);
    setTodoItem('');
  }

  // function that handles delting items from list
  const handleDeleteItem = (id) => {
    // filter out the item with the given id
    const newTodoList = todoList.filter(item => item.id !== id);
    setTodoList(newTodoList);
  }

  // render input field and button to add items and list of items
  return (
    <div>
      <Head>
        <title>To Do List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>To Do List</h1>
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
            placeholder="Add a new item"
          />
          <button type="submit">Add</button>
        </form>

        <ul>
          {todoList.map(item => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );







  }