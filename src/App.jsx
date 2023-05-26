import { useState } from "react";

function Item({ value, handleDelete }) {
    return (
        <div id={value.id} className="itemSection">
            <div className="itemCheckboxSection">
                <input type="checkbox" />
            </div>
            <div className="itemTextSection">{value.message}</div>
            <div className="deleteButtonSection">
                <button
                    onClick={() => handleDelete(value.id)}
                    className="deleteButton"
                >
                    X
                </button>
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

function TodoApp() {
    const [message, setMessage] = useState("");
    const [tasks, setTasks] = useState([]);

    const onChange = (event) => {
        setMessage(event.target.value);
    };

    const onClick = () => {
        setTasks(
            tasks.concat({ id: crypto.randomUUID(), message: `${message}` })
        );
    };

    const handleDelete = (id) => {
        let removedItemList = tasks.filter((task) => {
            return task.id != id;
        });
        setTasks(removedItemList);
    };

    return (
        <>
            <div className="todoAppSection">
                <div className="itemRows">
                    {tasks.map((task) => (
                        <Item
                            handleDelete={handleDelete}
                            key={crypto.randomUUID()}
                            value={task}
                        />
                    ))}
                </div>
                <Input change={onChange} click={onClick} />
            </div>
        </>
    );
}

export default function App() {
    return <TodoApp />;
}
