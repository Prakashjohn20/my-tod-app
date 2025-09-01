import React, { useState } from 'react';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: input,
                completed: false
            };

            setTodos([...todos, newTodo]);
            setInput('');
        }
    };

    const deletetodo=(id)=> {
      setTodos(todos.filter ((todo) => (todo.id !==id)));
    };

    return (
        <div className='app'>
            <h1>Todo App</h1>

            <div className='input-section'>
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={addTodo}>Add Todo</button>
            </div>

            <div className='todos-list'>
                {todos.map((add) => (
                    <div>
                        <li key={add.id}> {add.text}
                            <button onClick={() => deletetodo(add.id)}>Delete</button>
                        </li>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
