import { useState } from "react";

function Item() {
    return <>Todo Items</>;
}

function Input() {
    return <>Input Section</>;
}

function TodoRow() {
    return <>Todo Row Section</>;
}

function App() {
    return (
        <>
            <TodoRow />
            <Input />
        </>
    );
}

export default App;
