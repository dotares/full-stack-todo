import { useState } from "react";

export default function Input() {
  const [message, setMessage] = useState("");
  const [updated, setUpdated] = useState(message);

  const handleChange = (e) => setMessage(e.target.value);
  const handleClick = () => setUpdated(message); // 'message' stores the value of input field

  return (
    <div>
      <input onChange={handleChange} value={message} type="text" />
      <button onClick={handleClick}>Add item +</button>
    </div>
  );
}
