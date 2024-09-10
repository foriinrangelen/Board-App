import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
const Home = () => {

  const navigate1 = useNavigate();

  const [posts, setPosts] = useState([]);
  const { isLogin, setIsLogin } = useContext(LoginContext);
  // 전체 데이터 요청하는 함수
  const getPostAll = async () => {
    try {
      let { data } = await axios('/board', {
        // headers: {
        //   'Access-Control-Allow-Origin': '*', // 모든 출처 허용
        //   // 추가 필요한 헤더가 있다면 여기에 설정
        // },
      });
      console.log(data[0].createAt,"123123");
      console.log(data);

      // 1. 내방식 이해필요
      // const [ removedAt ]= data.map((item,i,arr) =>{
      //   let temp= item.createAt.split('T')[0]
      //   arr[i].createAt= temp
      //   return arr
      // })

      // 2. 일반적인 방식
      const removedAt = data.map(item => {
        const date = new Date(item.createAt);
        let temp= item.createAt.split('T')[0]
      
        return {
          ...item,
          createAt: temp // createAt만 변경
        };
      });
      console.log(removedAt,"123123")
      setPosts(removedAt); // 상태 업데이트
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log('데이터');
    getPostAll();

  }, []);
const postClick= async(e)=>{
  console.log(e.target.parentElement.firstElementChild.innerText)
  const boardNo= e.target.parentElement.firstElementChild.innerText;
  navigate1(`/board/${boardNo}`)

}


  return (
    <div>
      <h1 className="login-text">게시판</h1>
      <div className="post-list">
      <table>
  <thead>
    <tr className='post-text'>
      <th>번호</th>
      <th>제목</th>
      <th>등록일</th>
      <th>작성자</th>
      <th>조회수</th>
    </tr>
  </thead>
  <tbody className="table-list">
    {posts.map((post, i) => ( 
      <tr key={i} className="post-item" onClick={(e)=>postClick(e)}>
        <td className="post-item">{post.boardNo}</td>
        <td className="post-title">{post.title}</td>
        <td className="post-item">{post.createAt}</td>
        <td className="post-item">{post.userId}</td>
        <td className="post-item">{post.viewCount || 0}</td> {/* 조회수는 post 객체에 따라 다르게 설정 가능 */}
      </tr>
    ))}
  </tbody>
</table>
    <div className='btn-wrap'>
    {isLogin && <button className='btn-create'onClick={()=> navigate1('/create')}>게시물 작성</button>}
    {/* <Link className='navbar__title navbar__item' to={'/'}>홈</Link> */}
    </div>

      </div>
      
    </div>
  )
}

export default Home
