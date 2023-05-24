import { useState } from "react";

function Item({ value, completed }) {
    const handleComplete = (e) => {
        if (e.target.checked) {
            completed = true;
        } else {
            completed = false;
        }
    };

    return (
        <li className="todoItem">
            <div className="todoItemContainer">
                <input onChange={handleComplete} type="checkbox" />
                <div className="todoValue">{value}</div>
            </div>
        </li>
    );
}

function Input({ handleChange, handleClick }) {
    return (
        <div className="inputSection">
            <input onChange={handleChange} type="text" />
            <button onClick={handleClick}>Add Item +</button>
        </div>
    );
}

function TodoRow({ tasks }) {
    return (
        <ul className="todoRowSection">
            {tasks.map((value, index) => (
                <Item
                    key={value.id + index}
                    completed={tasks.completed}
                    value={value.message}
                />
            ))}
        </ul>
    );
}

function App() {
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState("");

    const handleChange = (e) => setMessage(e.target.value);
    const handleClick = () => {
        setTasks(
            tasks.concat({ id: 0, message: `${message}`, completed: false })
        );
    };

    return (
        <div className="todoApp">
            <TodoRow tasks={tasks} />
            <Input handleChange={handleChange} handleClick={handleClick} />
        </div>
    );
}

export default App;
