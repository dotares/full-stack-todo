import { useState } from "react";

function Item() {
    return <div className="todoItem">Todo-item</div>;
}

function Input() {
    const [message, setMessage] = useState("");
    const [update, setUpdated] = useState(message);

    const handleChange = (e) => setMessage(e.target.value);
    const handleClick = () => setUpdated(message);

    return (
        <div className="inputSection">
            <input onChange={handleChange} type="text" />
            <button onClick={handleClick}>Add Item +</button>
        </div>
    );
}

function TodoRow() {
    return (
        <div className="todoRowSection">
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
}

function App() {
    return (
        <div className="todoApp">
            <TodoRow />
            <Input />
        </div>
    );
}

export default App;
