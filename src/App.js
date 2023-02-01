
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: 'home',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
