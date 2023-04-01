import { ScrollRestoration, Outlet } from 'react-router-dom';
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
