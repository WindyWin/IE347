import React from 'react';
import Cmt from '../../components/core/Cmt';
import { comment } from './Data';
export default function Comment() {
  return (
    <>
      <p id='title'>Đánh giá của khách hàng</p>
      {comment.map((cmt) => (

        <div className='comment'>
          <img src="https://joeschmoe.io/api/v1/random" alt="" />
          <p>{cmt.owner}</p>
          <p>{cmt.content}</p>

          <br />
        </div>

      ))}
      <Cmt />

    </>
  )
}
