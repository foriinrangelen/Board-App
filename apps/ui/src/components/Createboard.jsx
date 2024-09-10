import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const Createboard = () => {
    const navigate = useNavigate()
    const [postTitle, setPostTitle]= useState('');
    const [postContent, setPostContent]= useState('');

    useEffect(()=>{
        console.log(postTitle, postContent);
    },[postTitle])

    const createPost= async(e)=>{
        e.preventDefault(); // 폼 제출 기본 동작 방지
        console.log(postTitle, postContent);
        try{
            const { data }= await axios.post('/board',{
                title:postTitle,
                contents:postContent,
                // Bearer 무조건 추가 0906 ✅ 
            }, {headers: {'Authorization': `Bearer ${Cookies.get('accessToken')}`}},
        )
        console.log(data);
        navigate('/')
        
    }catch(err){
        console.log(err)
    }

    }
  return (
    <div>
      <span className="login-text">게시물 작성</span>
      
      <div className="create-post-page">
        <div className="create-form">
          <form className="login-form">
             <h4 style={{ margin: '0px', float:"left" }}>제목</h4>
             <input type="text"
                    placeholder="글 제목을 입력하세요"
                     value={postTitle}
                     onChange={(e) => setPostTitle(e.target.value)}
                     style={{ marginTop: '0.4rem'}} />

             <h4 style={{ margin: '0px', float:"left" }}>내용 </h4>
             <textarea className='create-post-content'
                        placeholder="내용을 입력하세요"
                        style={{ marginTop: '0.4rem'}}
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                        />
        <button className='create-post-btn' onClick={createPost}>등록하기</button>
            </form>
  </div>
</div>
      </div>

  )
}

export default Createboard
