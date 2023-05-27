import TodoApp from "./TodoApp";

export default function Input({ change, click }) {
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
