import { useState } from "react";
import Input from "./Input";
import Item from "./Item";
import db from "../../../backend/database/connection.js"

export default function TodoApp() {
    const [message, setMessage] = useState("");
    const [tasks, setTasks] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    const onChange = (event) => {
        setMessage(event.target.value);
    };

    const onClick = () => {
        setTasks(
            tasks.concat({
                id: crypto.randomUUID(),
                message: `${message}`,
                completed: false,
            })
        );
    };

    const handleDelete = (id) => {
        let removedItemList = tasks.filter((task) => task.id != id);
        setTasks(removedItemList);
    };

    const handleChecks = () => {
        setIsChecked(!isChecked);
    };

    const handleComplete = (id) => {
        tasks.map((task) => {
            if (id === task.id) {
                task.completed = !task.completed;
                handleChecks();
            }
        });
    };

    return (
        <>
            <div className="todoAppSection text-white">
                <div className="itemRows p-6">
                    {tasks.map((task) => (
                        <Item
                            handleDelete={handleDelete}
                            handleComplete={handleComplete}
                            handleCheck={task.completed}
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
