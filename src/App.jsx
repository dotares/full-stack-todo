import { useState } from "react";

function Item() {
    return (
        <li id="0" className="todoItem">
            Todo-item
        </li>
    );
}

function Input() {
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState("");

    const setText = (e) => setMessage(e.target.value);
    const addTask = () => {
        setTasks(tasks.concat(message));
    };

    return (
        <div className="inputSection">
            <input onChange={setText} type="text" />
            <button onClick={addTask}>Add Item +</button>
        </div>
    );
}

function TodoRow() {
    return (
        <div className="todoRowSection">
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
}

function App() {
    return (
        <div className="todoApp">
            <TodoRow />
            <Input />
        </div>
    );
}

export default App;
