import { ScrollRestoration, Outlet } from 'react-router-dom';
import './App.css';
import GlobalStyles from './style/globalStyles';

function App() {
  return (
    <div>
      <ScrollRestoration />
      <Outlet />
      <GlobalStyles />
    </div>
  );
}

export default App;
