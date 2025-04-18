import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/product-list",
        element: <ProductList />
      },
      {
        path: "/product/:id",
        element: <ProductDetails />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
