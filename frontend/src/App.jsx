import { useState } from 'react';
import './App.css';
import Login from './login/login';
import { createBrowserRouter, RouterProvider,Route, Routes } from 'react-router-dom';
import Home from './home/home';

function App() {
  const [count, setCount] = useState(0);
const router=createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/home",
    element:<Home/>
  }
])
  return (
    <div>

      <RouterProvider router={router}/>
      {/* <Routes>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/home'} element={<Home/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
