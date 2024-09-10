import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  // 전체 데이터 요청하는 함수
  const getPostAll = async () => {
    try {
      let { data } = await axios('/board', {
        // headers: {
        //   'Access-Control-Allow-Origin': '*', // 모든 출처 허용
        //   // 추가 필요한 헤더가 있다면 여기에 설정
        // },
      });
      console.log(data,"123123");
      setPosts(data); // 상태 업데이트
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log('데이터');
    getPostAll();

  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post,i) => (
          <li key={i}>{post.boardNo}{post.userId}{post.contents}{post.updateAt}{post.createAt}</li> // id와 title을 사용하여 리스트 렌더링
        ))}
      </ul>
    </div>
  );
};

export default Posts;