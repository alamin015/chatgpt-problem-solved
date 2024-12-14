import { useState } from "react";

const Lists = [
  {
    id: 1,
    title: "hello world",
    isComplete: false,
  },
];
export default function Todo() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(Lists);

  const handleAddItems = () => {
    const id = list[list.length - 1].id + 1;
    const newItem = {
      id,
      title: item,
      isComplete: false,
    };
    setList([...list, newItem]);
    setItem("");
  };

  const handleCompleteStatus = (id) => {
    setList(
      list.map((i) => (i.id === id ? { ...i, isComplete: !i.isComplete } : i))
    );
  };

  const handleDelete = (id) => {
    setList(list.filter((i) => i.id !== id));
  };

  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={handleAddItems}>Add Item</button>
      </div>
      <div>
        <ul>
          {list.map((i) => (
            <div key={i.id}>
              <li
                style={{
                  background: i.isComplete ? "red" : "white",
                  display: "inline-flex",
                }}
              >
                {i.title}
              </li>
              <button onClick={() => handleCompleteStatus(i.id)}>
                {i.isComplete ? "Undo" : "Complete"}
              </button>
              <button onClick={() => handleDelete(i.id)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
