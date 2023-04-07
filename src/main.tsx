import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Detail from './pages/mobile/commentary/detail';
import Admin from './pages/admin';
import Strategy from './components/mobile/strategy/Strategy';
import Mobile from './pages/mobile/index';
import Commentary from './components/mobile/commentary/CommentaryIndex';
// const App = React.lazy(() => import('./App'));
// const Mobile = React.lazy(() => import('./pages/mobile/index'));
// const Detail = React.lazy(() => import('./pages/mobile/commentary/detail'));
// const Admin = React.lazy(() => import('./pages/admin/index'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/mobile',
        element: <Mobile />,
      },
      {
        path: '/mobile/strategy',
        element: <Strategy />,
      },
      {
        path: '/mobile/commentary',
        element: <Commentary />,
      },
      {
        path: '/detail/:index',
        element: <Detail />,
      },
      // {
      //   path: '/mobile/search',
      //   element: <Search />,
      // },
      {
        path: '/admin',
        element: <Admin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
);
