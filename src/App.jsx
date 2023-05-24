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
                <Item key={index} value={task.value} />
            ))}
        </div>
    );
}

function TodoApp() {
    const [message, setMessage] = useState("");
    const [update, setUpdated] = useState(message);
    const [tasks, setTasks] = useState([]);

    const onChange = (event) => {
        setMessage(event.target.value);
    };

    const onClick = () => {
        setUpdated(message);
        setTasks(tasks.concat({ value: `${message}` }));
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

// function Item({ value, completed }) {
//     const handleComplete = (e) => {
//         if (e.target.checked) {
//             completed = true;
//         } else {
//             completed = false;
//         }
//     };

//     return (
//         <li className="todoItem">
//             <div className="todoItemContainer">
//                 <input onChange={handleComplete} type="checkbox" />
//                 <div className="todoValue">{value}</div>
//             </div>
//         </li>
//     );
// }

// function Input({ handleChange, handleClick }) {
//     return (
//         <div className="inputSection">
//             <input onChange={handleChange} type="text" />
//             <button onClick={handleClick}>Add Item +</button>
//         </div>
//     );
// }

// function TodoRow({ tasks }) {
//     return (
//         <ul className="todoRowSection">
//             {tasks.map((value, index) => (
//                 <Item
//                     key={value.id + index}
//                     completed={tasks.completed}
//                     value={value.message}
//                 />
//             ))}
//         </ul>
//     );
// }

// function App() {
//     const [tasks, setTasks] = useState([]);
//     const [message, setMessage] = useState("");

//     const handleChange = (e) => setMessage(e.target.value);
//     const handleClick = () => {
//         setTasks(
//             tasks.concat({ id: 0, message: `${message}`, completed: false })
//         );
//     };

//     return (
//         <div className="todoApp">
//             <TodoRow tasks={tasks} />
//             <Input handleChange={handleChange} handleClick={handleClick} />
//         </div>
//     );
// }

// export default App;
