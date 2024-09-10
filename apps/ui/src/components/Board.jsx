import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'
import { useNavigate, useParams } from 'react-router-dom'

const Board = () => {

    const navigate = useNavigate()
    const { boardNo } = useParams();
    const [findPost, setFindPost] = useState();
    const [isAuthor, setIsAuthor] = useState(false); // 작성자 여부 상태
    const [updatePostCheck, setUpdatePostCheck] = useState(false);

    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedContents, setUpdatedContents] = useState('');

    const getPost= async()=>{
      try{
        const { data }= await axios.get(`/board/${boardNo}`,
          {headers: {'Authorization': `Bearer ${Cookies.get('accessToken')}`}}
        )
        console.log(data)
        
        setFindPost(data)
        setUpdatedTitle(data.title); // 초기값 설정
        setUpdatedContents(data.contents); // 초기값 설정

      }catch(err){
        console.log(err);
      }
    
    }
    useEffect(()=>{
      getPost()

    },[])

    useEffect(() => {
      const currentUserId = Cookies.get('userId'); // 쿠키에서 현재 사용자 ID 가져오기
      if (findPost?.userId && currentUserId) {
          setIsAuthor(findPost.userId === currentUserId); // 작성자 여부 확인
      }
  }, [findPost]);

  const updatePost= ()=>{
    setUpdatePostCheck(true);
  }

  const deletePost= async(e)=>{

    e.preventDefault(); // 폼 제출 기본 동작 방지
    const { data }= await axios.delete(`/board/${boardNo}`,{
                                      headers: {'Authorization': `Bearer ${Cookies.get('accessToken')}`}},)

    console.log(data)

    navigate(`/`)
  }
  const sendUpdatePost= async (e)=>{
    e.preventDefault(); // 폼 제출 기본 동작 방지
    console.log(updatedTitle)
    console.log(updatedContents)
    
    try{
      const { data }= await axios.put(`/board/${boardNo}`,{
        title:updatedTitle,
        contents:updatedContents,
      },{headers: {'Authorization': `Bearer ${Cookies.get('accessToken')}`}},)
  
      console.log(data)
      setUpdatePostCheck(false);
      navigate(`/board/${boardNo}`)
    }catch(err){
      console.log(err)
    }

  

    
  }

  return (
    <div>
      <span className="login-text">게시물</span>
      
      <div className="create-post-page">
        <div className="create-form">
          <form className="login-form">
              <div className='post-author'>
              <h4 style={{ margin: '0px', float:"left" }}>{findPost?.userId}</h4><span>{findPost?.createAt.split('T')[0]}</span>
              </div>
            
         

             <h4 style={{ margin: '0px', float:"left" }}>제목</h4>
             <input type="text"
                    readOnly={!updatePostCheck}
                     value={updatedTitle}
                     onChange={(e) => setUpdatedTitle(e.target.value)} // 입력값 변경 시 상태 업데이트
                     style={{ marginTop: '0.4rem', border:"1px solid #f2f2f2", backgroundColor: !updatePostCheck?'white':'#f2f2f2'}} />

             <h4 style={{ margin: '0px', float:"left" }}>내용 </h4>
             <textarea className='create-post-content'
                        readOnly={!updatePostCheck} // updatePost가 true일 때 readOnly 적용
                        onChange={(e) => setUpdatedContents(e.target.value)} // 입력값 변경 시 상태 업데이트
                        style={{ marginTop: '0.4rem', border:"1px solid #f2f2f2", backgroundColor: !updatePostCheck?'white':'#f2f2f2'}}
                        value={updatedContents}
                        
                        />
                      <div className='post-author'>
            <button className='btn-create' onClick={()=>navigate('/')}>뒤로가기</button>
            {/* {isAuthor &&<button className='btn-create' onClick={()=>{updatePost(true)}} >수정하기</button>} */}
            {/* {!updatePostCheck && isAuthor ? (
              <button className='btn-create' onClick={() => updatePost()}>수정하기</button>) :
            ( <button className='btn-create' onClick={()=> sendUpdatePost()}>저장</button>)} */}
            {isAuthor && !updatePostCheck && (
              <button className='btn-create' onClick={() => updatePost(true) }>수정하기</button>)}
            {isAuthor && updatePostCheck && (
              <button className='btn-create' onClick={(e) => sendUpdatePost(e)}>저장</button>)}
                {isAuthor &&(
              <button className='btn-create 'id='btn-delete' onClick={(e) => {deletePost(e)}}>삭제</button>)}
            </div>
            
            </form>

  </div>
  
</div>
      </div>

  )
}

export default Board
