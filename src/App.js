import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const App = () => {

  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
