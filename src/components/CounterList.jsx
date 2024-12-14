import { useState } from "react";
import Counter from "./Counter";
const data = [
  {
    id: 1,
    serialNumber: 1,
    counter: 0,
  },
  {
    id: 2,
    serialNumber: 2,
    counter: 0,
  },
  {
    id: 3,
    serialNumber: 3,
    counter: 0,
  },
];

export default function CounterList() {
  const [counterArray, setCounterArray] = useState(data);
  const handleIncrement = (id) => {
    setCounterArray(
      counterArray.map((i) =>
        i.id === id ? { ...i, counter: i.counter + 1 } : i
      )
    );
  };
  const handleDecrement = (id) => {
    setCounterArray(
      counterArray.map((i) =>
        i.id === id && i.counter > 0 ? { ...i, counter: i.counter - 1 } : i
      )
    );
  };
  const handleDelete = (id) => {
    setCounterArray(counterArray.filter((i) => i.id !== id));
  };
  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all counters?")) {
      setCounterArray(
        counterArray.map((i) => {
          return { ...i, counter: 0 };
        })
      );
    }
  };
  const totalCount = counterArray.reduce(
    (prev, next) => prev + next.counter,
    0
  );

  const handleAddCounter = () => {
    const serialNumber = counterArray[counterArray.length - 1].serialNumber + 1;
    console.log(serialNumber);
    const newCounter = { id: Date.now(), counter: 0 };
    setCounterArray([...counterArray, { ...newCounter, serialNumber }]);
  };

  return (
    <div className="container mx-auto ">
      <div className="mt-8 flex justify-between">
        <button
          onClick={handleReset}
          className="text-lg font-semibold border border-red-600 rounded-lg py-1 px-6 hover:bg-red-600 hover:text-white transition-all"
        >
          Reset All Counter
        </button>
        <button
          onClick={handleAddCounter}
          className="text-lg font-semibold border border-green-600 rounded-lg py-1 px-6 hover:bg-green-600 hover:text-white transition-all"
        >
          Add Counter
        </button>

        <h3 className="text-3xl font-semibold ">
          Total Counter : {totalCount}
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-8">
        {counterArray.map((item) => (
          <Counter
            key={item.id}
            item={item}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
