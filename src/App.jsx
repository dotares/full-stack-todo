import { useState } from "react";

function Item({ value }) {
    return <li className="todoItem">{value}</li>;
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
            {tasks.map((value) => (
                <Item value={value.message} />
            ))}
        </ul>
    );
}

function App() {
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState();

    const handleChange = (e) => setMessage(e.target.value);
    const handleClick = () => {
        setTasks(tasks.concat({ id: 1, message: `${message}` }));
    };

    return (
        <div className="todoApp">
            <TodoRow tasks={tasks} />
            <Input handleChange={handleChange} handleClick={handleClick} />
        </div>
    );
}

export default App;
