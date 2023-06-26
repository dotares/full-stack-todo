import TodoApp from "./TodoApp";

export default function Input({ change, click }) {
    return (
        <div className="inputSection p-6 flex fixed bottom-0 place-content-center w-full">
            <div className="inputText w-full ">
                <input className="textInput p-6" onChange={change} type="text" placeholder="Walk the dog..."/>
            </div>
            <div className="inputButton w-full text-center">
                <button onClick={click} className="addItemButton p-6">
                    Add Item +
                </button>
            </div>
        </div>
    );
}
