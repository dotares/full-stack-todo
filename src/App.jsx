import { useState } from "react";

function Item() {
    return <div className="todoItem">Todo-item</div>;
}

function Input() {
    return (
        <div className="inputSection">
            <input type="text" />
            <button>Add Item +</button>
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
