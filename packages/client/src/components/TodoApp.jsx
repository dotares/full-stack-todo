import { useState } from "react";
import Input from "./Input";
import Item from "./Item";

export default function TodoApp() {
    const [message, setMessage] = useState("");
    const [tasks, setTasks] = useState([]);

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

    const handleComplete = (id) => {
        tasks.map((task) => {
            if (!task.completed && id === task.id) task.completed = true;
            else if (task.completed && id === task.id) task.completed = false;
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
