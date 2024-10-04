import { createContext } from "react";
import Cookies from 'js-cookie';
// 전역으로 state를 관리하기 위한 context 생성
console.log(Cookies.get('accessToken'),"Cookies.get('accessToken')Cookies.get('accessToken')")
export const LoginContext = createContext(null);