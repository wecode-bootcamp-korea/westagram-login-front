import React from "react";
import "./InputContainer.scss";

function InputContainer({
  handleCommentInput,
  addCommentByClick,
  commentInput,
  addCommentByEnter,
}) {
  return (
    <div className="inputContainer">
      <button className="emoticons">
        <svg
          aria-label="이모티콘"
          fill="#262626"
          height="24"
          viewBox="0 0 48 48"
          width="24"
        >
          <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
          <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
        </svg>
      </button>
      <input
        className="commentsInput"
        placeholder="댓글 달기..."
        onChange={handleCommentInput}
        value={commentInput}
        onKeyPress={addCommentByEnter}
      />
      <button
        className={`postingBtn ${commentInput.trim() ? "" : "disabled"}`}
        onClick={addCommentByClick}
        disabled={!commentInput}
      >
        게시
      </button>
    </div>
  );
}

export default InputContainer;
