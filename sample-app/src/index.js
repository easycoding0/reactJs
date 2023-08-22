import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import NotFound from './NotFound';

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/login", element: <LoginPage />},
  {path: "*", element: <NotFound />}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)