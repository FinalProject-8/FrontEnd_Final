import { ScrollRestoration, Outlet } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div>
      <ScrollRestoration />
      <Outlet />
    </div>
  );
}

export default App;
