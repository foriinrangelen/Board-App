import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

import Cookies from 'js-cookie';

const Navbar = () => {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useContext(LoginContext);

  useEffect(() => {
    const userId = Cookies.get('userId');
    if (userId) {
      setIsLogin(true); // 쿠키가 존재하면 로그인 상태 설정
    }
  }, [setIsLogin]);

  
  const logOut = () => {
    setIsLogin(false);
    Cookies.remove('userId');
    Cookies.remove('accessToken');
    navigate('/'); // 로그아웃 후 홈으로 리디렉션
  };

  return (
    <header className='navbar'>
      <Link className='navbar__title navbar__item' to={'/'}>홈</Link>
      {isLogin ? (
        <>
          <Link className='navbar__item' to={'/profile'}>{Cookies.get('userId')}</Link>
          <Link className='navbar__item' to={'/'} onClick={logOut}>로그아웃</Link>
        </>
      ) : (
        <>
          <Link className='navbar__item' to={'/login'}>로그인</Link>
          <Link className='navbar__item' to={'/join'}>회원가입</Link>
        </>
      )}
    </header>
  );
}

export default Navbar;
