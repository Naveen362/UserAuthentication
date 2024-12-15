import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-5" style={{height:"100vh"}}>
      {/* Row starts */}<h1 className='text-center fst-italic'>Login Form</h1>
      <div className="row mx-auto ">
        {/* Column setup */}
        <div className="col-12 col-md-6 col-lg-6 border mx-auto rounded" style={{marginTop:"150px",backgroundColor:"whitesmoke"}}>
          <div className="p-3 mt-4">
            <input
              type="text"
              className="form-control w-100 border"
              placeholder="Enter text here"
            />
          </div>
          <div className='p-3 '>
          <input type='password' className='form-control w-100 ' placeholder='Enter Your Password here...'/>
        </div>
        <div className='p-3 mx-auto '>
         <button className='btn btn-outline-info  w-100'>Login</button>
        </div>
        <div className='d-flex justify-content-evenly my-4'>
          <a href="#" className='text-danger '>ForgotPassword?</a>
          <a href='#' >New user(Register)</a>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
