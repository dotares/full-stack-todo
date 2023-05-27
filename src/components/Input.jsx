import TodoApp from "./TodoApp";

export default function Input({ change, click }) {
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
