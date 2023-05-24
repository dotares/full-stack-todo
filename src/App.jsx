import { useState } from "react";

function Item({ value }) {
    return (
        <div className="itemSection">
            <div className="itemCheckbox">
                <input type="checkbox" />
            </div>
            <div className="itemText">{value}</div>
        </div>
    );
}

function Input({ change, click }) {
    return (
        <div className="inputSection">
            <div className="inputText">
                <input onChange={change} type="text" />
            </div>
            <div className="inputButton">
                <button onClick={click} className="addItemButton">
                    Add Item +
                </button>
            </div>
        </div>
    );
}

function ItemRows({ tasksList }) {
    return (
        <div className="itemRows">
            {tasksList.map((task, index) => (
                <Item
                    key={index}
                    value={task.value}
                    completed={task.completed}
                />
            ))}
        </div>
    );
}

function TodoApp() {
    const [message, setMessage] = useState("");
    const [tasks, setTasks] = useState([]);

    const onChange = (event) => {
        setMessage(event.target.value);
    };

    const onClick = () => {
        setTasks(tasks.concat({ value: `${message}`, completed: false }));
    };

    return (
        <div className="todoAppSection">
            <ItemRows tasksList={tasks} />
            <Input change={onChange} click={onClick} />
        </div>
    );
}

export default function App() {
    return <TodoApp />;
}
