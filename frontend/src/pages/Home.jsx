import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom'
import { Pagination, Stack } from '@mui/material';
import Cookies from 'js-cookie'
import { Row,Col } from 'react-bootstrap';
const Home = () => {

  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const [totalPages, setTotalPages] = useState(1); // 총 페이지 수 상태 추가
  const postsPerPage = 8; // 페이지당 게시물 수
  // 전체 데이터 요청하는 함수
  const getPostAll = async () => {
    try {
      let { data } = await axios(`/api/board?page=${page}`, {
        // headers: {
        //   'Access-Control-Allow-Origin': '*', // 모든 출처 허용
        //   // 추가 필요한 헤더가 있다면 여기에 설정
        // },
      });
      // console.log(data[0].createAt,"123123");
      console.log(data);

      // 1. 내방식 이해필요
      // const [ removedAt ]= data.map((item,i,arr) =>{
      //   let temp= item.createAt.split('T')[0]
      //   arr[i].createAt= temp
      //   return arr
      // })
      

      // 2. 일반적인 방식
      const removedAt = data.boards.map(item => {
        // const date = new Date(item.createAt);
        let temp= item.createAt.split('T')[0]
      
        return {
          ...item,
          createAt: temp // createAt만 변경
        };
      });
      console.log(removedAt,"123123")
      setPosts(removedAt); // 상태 업데이트
      setTotalPages(data.totalPages)
      
    } catch (err) {
      console.log(err);
    }

  };

  useEffect(() => {
    console.log('데이터');
    getPostAll();

  }, [page]); // 페이지 번호가 변경될때마다 데이터 요청

const postClick= async(e)=>{
  console.log(e.target.parentElement.firstElementChild.innerText)
  const boardNo= e.target.parentElement.firstElementChild.innerText;
  navigate(`/board/${boardNo}`)

}

const paging = (event, newPage) => {
  console.log(newPage,"페이지")
  setPage(newPage); // 페이지 번호를 설정
};


  return (
    <>
      <p className="login-text text-center">게시판</p>
  
      <table className='table-height'>
  <thead>
    <tr className='text-center fw-bold'>
      <th>번호</th>
      <th>제목</th>
      <th>등록일</th>
      <th>작성자</th>
      <th>조회수</th>
    </tr>
  </thead>
  <tbody className="text-center">
    {posts.map((post, i) => ( 
      <tr key={i} className="post-item" onClick={(e)=>postClick(e)}>
        <td className="post-item fw-bold">{post.boardNo}</td>
        <td className="post-title">{post.title}</td>
        <td className="post-item">{post.createAt}</td>
        <td className="post-item">{post.userId}</td>
        <td className="post-item">{post.viewCount || 0}</td> {/* 조회수는 post 객체에 따라 다르게 설정 가능 */}
      </tr>
    ))}
  </tbody>
</table>

<div className='btn-wrap' style={{ display: 'flex', justifyContent: 'space-between'}}>
  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
    <Stack spacing={2} alignItems="center" mt={2}>
      <Pagination count={totalPages} page={page} onChange={paging} variant="outlined" shape="rounded" />
    </Stack>
  </div>
  {isLogin && (
    <button className='btn-create' onClick={() => navigate('/create')}>게시물 작성</button>
  )}
</div>


      


      </>
  )
}

export default Home
