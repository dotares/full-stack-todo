import { useState } from "react";
import Item from "./components/Item";
import Input from "./components/Input";

function App() {
    return (
        <div className="todoApp">
            <div className="itemsContainer">
                <Item />
                <Item />
                <Item />
            </div>
            <div className="inputContainer">
                <Input />
            </div>
        </div>
    );
}

export default App;
