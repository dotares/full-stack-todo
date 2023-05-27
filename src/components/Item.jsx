import TodoApp from "./TodoApp";

// value is the obj made from TodoApp component and handleDelete executes the delete function
export default function Item({ value, handleDelete }) {
    return (
        <div id={value.id} className="itemSection">
            <div className="itemCheckboxSection">
                <input type="checkbox" />
            </div>
            <div className="itemTextSection">{value.message}</div>
            <div className="deleteButtonSection">
                <button
                    onClick={() => handleDelete(value.id)}
                    className="deleteButton"
                >
                    X
                </button>
            </div>
        </div>
    );
}
