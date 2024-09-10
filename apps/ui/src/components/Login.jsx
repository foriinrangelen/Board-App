import React, { useState, useContext } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const { isLogin, setIsLogin } = useContext(LoginContext);
    const [userId, setUserId]= useState(null);
    const [userPassword, setUserPassword]= useState(null);
    const loginS= async(e)=>{
        e.preventDefault(); // 폼 제출 기본 동작 방지
        console.log("클릭")
        console.log(userId)
        console.log(userPassword)
        const { data } = await axios.post('/login', {
            userId,
            password:userPassword
          })
          console.log(data)
          Cookies.set('accessToken', data.accessToken, { expires: 7 }); // 7일 동안 유효
          Cookies.set('userId', data.payload.userId, { expires: 7 }); // 7일 동안 유효
          setIsLogin(true); // 로그인 상태 true로 설정
          navigate('/')
          console.log(Cookies.get('accessToken'),'accessTokenaccessTokenaccessToken')
    }

  return (
    <div>
        <span className="login-text">로그인</span>
    <div className="card">
    <div className="login-page">
  <div className="form">
    {/* <form className="register-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p className="message">Already registered? <a href="#">Sign In</a></p>
    </form> */}
    <form className="login-form">
    <h4 style={{ margin: '0px', float:"left" }}>아이디</h4>
      <input type="text"
             placeholder="ID"
             value={userId}
             onChange={(e) => setUserId(e.target.value)}
             style={{ marginTop: '0.4rem'}} />

      <h4 style={{ margin: '0px', float:"left" }}>비밀번호 </h4>
      <input type="password"
             placeholder="password"
             value={userPassword}
             onChange={(e) => setUserPassword(e.target.value)}
             style={{ marginTop: '0.4rem'}}/>
      <button onClick={loginS}>로그인</button>
      <p className="message">Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>

        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
    </div>
  )
}

export default Login
