import { useState } from "react";

function Item() {
    return <div className="todoItem">Todo-item</div>;
}

function Input() {
    const [message, setMessage] = useState("");

    const setText = (e) => setMessage(e.target.value);
    const addTask = () => console.log(`Task ${message} added to the list`);

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
    const [tasks, setTasks] = useState([]);

    return (
        <div className="todoApp">
            <TodoRow />
            <Input />
        </div>
    );
}

export default App;
