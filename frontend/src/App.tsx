
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Join from './components/Join'
import Home from './components/Home';
import Board from './components/Board';
import  Logo  from './components/Logo'
import Navbar from './components/Navbar'

import Createboard from './components/Createboard';
import { useState } from 'react';
import { LoginContext } from './context/LoginContext'

function App() {
  const [isLogin, setIsLogin] = useState(false);
  // const [count, setCount] = useState(0)

  return (
    <>
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      <Navbar/>
      <div className='logo-container'>
      <Logo/>
      <Logo className="list2" />
      
      </div>
      {/* <h2>Vite + React + NestJS + TurboRepo</h2> */}
    {/* <Login></Login> */}
    

    <Routes>
        {/* URL 파라미터 형식으로 Route 구성하기 */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/join' element={<Join/>} />
        <Route path='/create' element={<Createboard/>} />
        <Route path='/board/:boardNo' element={<Board />} />
        {/* <Route path='/user' element={<PrivateRoute />} /> */}

      </Routes>
      {/* <p classNameName="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      </LoginContext.Provider>
    </>
  )
}

export default App
