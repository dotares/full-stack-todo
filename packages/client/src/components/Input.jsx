import TodoApp from "./TodoApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function Input({ change, click }) {
    return (
        <div className="inputSection bg-zinc-800 text-white p-4 flex fixed bottom-0 place-content-center w-full">
            <div className="inputText pr-2 sm:w-2/3 w-full">
                <input
                    className="textInput bg-white text-black font-semibold w-full rounded-xl p-6"
                    onChange={change}
                    type="text"
                    placeholder="Walk the dog..."
                />
            </div>
            <div className="inputButton sm:w-1/3 w-full text-center">
                <button
                    onClick={click}
                    className="addItemButton w-full bg-green-400 text-zinc-800 font-black rounded-xl py-6"
                >
                    Add
                    <FontAwesomeIcon className="px-2" icon="fa-solid fa-plus" />
                </button>
            </div>
        </div>
    );
}
