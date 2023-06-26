import TodoApp from "./TodoApp";

export default function Input({ change, click }) {
    return (
        <div className="inputSection bg-slate-800 text-white p-6 flex fixed bottom-0 place-content-center w-full">
            <div className="inputText px-2 w-3/4">
                <input
                    className="textInput bg-slate-300 text-black w-full rounded-xl p-6"
                    onChange={change}
                    type="text"
                    placeholder="Walk the dog..."
                />
            </div>
            <div className="inputButton w-1/4 text-center">
                <button
                    onClick={click}
                    className="addItemButton bg-slate-700 rounded-xl p-6"
                >
                    Add Item
                </button>
            </div>
        </div>
    );
}
