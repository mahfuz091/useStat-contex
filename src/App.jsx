import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseStatus from "./components/UserStatus/UseStatus";

function App() {
  const [count, setCount] = useState(0);

  return <UseStatus></UseStatus>;
}

export default App;
