import { ScrollRestoration, Outlet } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div>
      <ScrollRestoration />
      <Outlet />
    </div>
  );
}

export default App;
