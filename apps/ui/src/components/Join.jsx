import React, { useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'

const Join = () => {
    const [userId, setUserId]= useState(null)
    const [userPassword, setUserPassword]= useState(null)
    const loginS= async(e)=>{
        e.preventDefault(); // 폼 제출 기본 동작 방지
        console.log("클릭")
        console.log(userId)
        console.log(userPassword)
        const { data } = await axios.post('http://localhost:3001/login', {
            userId,
            password:userPassword
          })
          console.log(data)
          Cookies.set('accessToken', data.accessToken, { expires: 7 }); // 7일 동안 유효
          console.log(Cookies.get('accessToken'),'accessTokenaccessTokenaccessToken')
    }

  return (
    <div>
      <span className="login-text">회원가입</span>
    <div className="card">
<div class="login-page">
  <div class="form">

    <form class="login-form">
    <h4 style={{ margin: '0px', float:"left" }}>아이디</h4>
    <input type="text" style={{ marginTop: '0.4rem'}} placeholder="ID"/>
    <h4 style={{ margin: '0px', float:"left" }}>비밀번호</h4>
      <input type="password" style={{ marginTop: '0.4rem'}} placeholder="password"/>
      <h4 style={{ margin: '0px', float:"left" }}>이름</h4>
      <input type="text" style={{ marginTop: '0.4rem'}} placeholder="name"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
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

export default Join
