import { useState } from "react";

// value is the obj made from TodoApp component and handleDelete executes the delete function
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
    // just the input component to react to button clicks and added items by the user
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

    // Function to make the array with button clicks, id is generated twice once here with randomUUID and the other in the tasks.map later
    const onClick = () => {
        setTasks(
            tasks.concat({ id: crypto.randomUUID(), message: `${message}` })
        );
    };

    // Function to reset the tasks array to remvove the item with the id of the button click
    const handleDelete = (id) => {
        let removedItemList = tasks.filter((task) => task.id != id);
        setTasks(removedItemList);
    };

    return (
        <>
            <div className="todoAppSection">
                <div className="itemRows">
                    {tasks.map((task) => (
                        // value is the array with the task objs
                        // handleDelete is the delete function
                        // key is the id for react reference and delete function
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
