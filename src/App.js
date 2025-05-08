import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import userStore from './Utils/userStore';

const App = () => {

  return (
    <Provider store={userStore}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
}

export default App;
