import TodoApp from "./TodoApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function Item({ value, handleDelete }) {
    return (
        <div id={value.id} className="itemSection w-full flex p-6 space-x-8">
            <div className="itemCheckboxSection">
                <input type="checkbox" />
            </div>
            <div className="itemTextSection w-full">{value.message}</div>
            <div className="deleteButtonSection text-center">
                <button
                    onClick={() => handleDelete(value.id)}
                    className="deleteButton"
                >
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                </button>
            </div>
        </div>
    );
}
