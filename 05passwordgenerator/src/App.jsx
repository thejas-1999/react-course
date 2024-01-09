import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div
      className="w-full max-w-md mx-auto shadow-md
  rounded-lg px-4 py-3 my-8 bg-gray-800 text-white"
    >
      <h1 className="text-3l font-bold mb-2 text-center">PASSWORD GENERATOR</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password..."
          readOnly
        />
        <button
          className="outline-none bg-blue-700
         text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={25}
            value={length}
            name=""
            id=""
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="length">Length:{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            name=""
            id=""
            onChange={() => setNumAllowed(!numAllowed)}
          />
          <label htmlFor="number">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            name=""
            id=""
            onChange={() => setCharAllowed(!charAllowed)}
          />
          <label htmlFor="characters">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
