/* eslint-disable react/prop-types */
export default function Counter({
  item,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) {
  return (
    <div className="border border-sky-200 shadow-xl p-4">
      <h1 className="text-3xl font-semibold text-center">
        Counter {item.serialNumber}
      </h1>
      <h2 className="font-semibold text-xl text-center">{item.counter}</h2>
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => handleDecrement(item.id)}
          disabled={item.counter < 1}
          className={`text-lg font-semibold border  border-${
            item.counter < 1 ? "red-600" : "sky-300"
          } rounded-lg py-1 px-6 hover:bg-sky-300 transition-all`}
        >
          -
        </button>
        <button
          onClick={() => handleIncrement(item.id)}
          className="text-lg font-semibold border border-sky-300 rounded-lg py-1 px-6 hover:bg-sky-300 transition-all"
        >
          +
        </button>
        <button
          onClick={() => handleDelete(item.id)}
          className="text-lg font-semibold border border-red-600 rounded-lg py-1 px-6 hover:bg-red-600 hover:text-white transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
