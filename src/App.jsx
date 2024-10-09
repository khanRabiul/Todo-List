import { useState } from "react";

function App() {
  const [listItem, setListItem] = useState("");
  const [items, setItem] = useState([]);

  const todo = (value) => {
    setListItem(value);
  };

  const todoList = (e) => {
    e.preventDefault();
    if (listItem.trim()) {
      // Add item as an object with id and value
      setItem([...items, { id: crypto.randomUUID(), value: listItem }]);
      setListItem("");
    }
  };

  const deleteButton = (id) => {
    // Filter out the item with the matching id
    const updatedList = items.filter((item) => item.id !== id);
    setItem(updatedList);
  };

  return (
    <main>
      <div className="container mx-auto mt-8">
        <form onSubmit={todoList} className="mb-8">
          <div className="mb-4">
            <label
              htmlFor="form"
              className="block text-xl text-blue-600 font-semibold mb-2"
            >
              New Item
            </label>
            <input
              value={listItem}
              onChange={(e) => todo(e.target.value)}
              type="text"
              className="bg-gray-300 text-blue-600 font-semibold px-3 py-2 rounded-md w-full focus:outline-2 focus:outline-blue-600"
            />
          </div>
          <button
            value={items}
            type="submit"
            className="w-full bg-gray-300 text-blue-600 font-semibold px-3 py-2 rounded-md border-2 border-blue-600"
          >
            Add
          </button>
        </form>

        <h1 className="text-3xl font-semibold text-blue-700">Todo List</h1>
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="space-x-2 text-xl">
              <label>
                <input type="checkbox" className="mr-2" />
                {item.value}
              </label>
              <button
                onClick={() => deleteButton(item.id)}
                className="px-2 py-1 bg-red-600 rounded-md text-white"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
