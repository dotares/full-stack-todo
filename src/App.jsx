import { useState } from "react";

function Item({ value }) {
    return (
        <div className="itemSection">
            <div className="itemCheckboxSection">
                <input type="checkbox" />
            </div>
            <div className="itemTextSection">{value}</div>
            <div className="deleteButtonSection">
                <button className="deleteButton">X</button>
            </div>
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
            {tasksList.map((task) => (
                <Item key={crypto.randomUUID()} value={task} />
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
        setTasks(tasks.concat(message));
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
