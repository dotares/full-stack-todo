import TodoApp from "./TodoApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function Input({ change, click }) {
    return (
        <div className="inputSection bg-zinc-800 text-white p-6 flex fixed bottom-0 place-content-center w-full">
            <div className="inputText px-2 w-2/3">
                <input
                    className="textInput bg-zinc-300 text-black w-full rounded-xl p-6"
                    onChange={change}
                    type="text"
                    placeholder="Walk the dog..."
                />
            </div>
            <div className="inputButton w-1/3 text-center">
                <button
                    onClick={click}
                    className="addItemButton w-full bg-green-400 text-black font-bold rounded-xl p-6"
                >
                    Add Item
                    <FontAwesomeIcon className="px-2" icon="fa-solid fa-plus" />
                </button>
            </div>
        </div>
    );
}
