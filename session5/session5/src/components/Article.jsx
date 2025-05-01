import React from 'react'
import { useEffect } from 'react'
import Comment from "../assets/img/comment.png";
import Heart from "../assets/img/heart.png";
import { useState } from 'react';

const Article = ({title, content}) => {

  const [click, setClick] = useState(false);

  useEffect(() => {
    console.log("title", title);
    console.log("content", content);
  },[])

  return (
    <div className="article_wrap">
      <div className="title">{title}</div>
      <div className="content">
        <p>{content}</p>
        <div className="info_box">
          <div className="comment">
            <img src={Comment} alt=""/>
          </div>
          <div className="like">
            <img src={Heart} onClick = {() => {setClick(true)}} alt=""/>
          </div>
        </div>
      </div>
      <div className="comment_box">
        <input type="text" placeholder='댓글을 입력해주세요!'/>
        <button>등록</button>
      </div>
    </div>
  )
}

export default Article
