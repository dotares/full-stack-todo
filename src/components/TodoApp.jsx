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
            tasks.concat({ id: crypto.randomUUID(), message: `${message}` })
        );
    };

    const handleDelete = (id) => {
        let removedItemList = tasks.filter((task) => task.id != id);
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
