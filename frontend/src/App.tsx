import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login'
import Join from './pages/Join'
import Home from './pages/Home';
import Board from './pages/Board';
import CreateBoard from './pages/CreateBoard';
import Logo from './components/Logo'
import Header from './components/Header'
import { useState } from 'react';
import { LoginContext } from './context/LoginContext'
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  // const [count, setCount] = useState(0)

  return (
    <>
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {/* 헤더 */}
      <Header/>
      
      <div className='logo-container'>
      <Logo/><Logo className="list2" /> 
      </div>
      {/* content */}
    <Container className='full-page' fluid>
    <Row className="justify-content-center full-page">
    <Col sm={7} ms={7} lg={7}>
      <Routes>
        {/* URL 파라미터 형식으로 Route 구성하기 */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/join' element={<Join/>} />
        <Route path='/create' element={<CreateBoard/>} />
        <Route path='/board/:boardNo' element={<Board />} />
        {/* <Route path='/user' element={<PrivateRoute />} /> */}

      </Routes>
      </Col>
      </Row>
      </Container>
      {/* footer */}
      
      </LoginContext.Provider>
    </>
  )
}

export default App
