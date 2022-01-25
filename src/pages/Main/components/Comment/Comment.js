import React from "react";

function Comment({ comment }) {
  return (
    <li>
      <a href="https://www.instagram.com/laeyoung/">laeyoung</a>
      &nbsp;<span>{comment}</span>
    </li>
  );
}

export default Comment;
