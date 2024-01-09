import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Card from "./Components/Card";

export function App({ userName }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="title text-3xl bg-green-300 p-3 rounded-md">
        vite with tailwind
      </h1>
      <Card userName="Thejas" />
    </>
  );
}
