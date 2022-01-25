import React from "react";
import "./Main.scss";

function Main() {
  return (
    <div className="main">
      <nav className="nav">
        <div className="navInner">
          <div className="titleWrapper">
            <i className="fab fa-instagram"></i>
            <span>|</span>
            <h1 className="title">westagram</h1>
          </div>

          <div className="searchWrapper">
            <i className="fas fa-search"></i>
            <p>검색</p>
          </div>

          <div>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
          </div>
        </div>
      </nav>

      <main className="mainContainer">
        <article>
          <section className="feed">
            <div className="feedHeader">
              <div>
                <i className="fas fa-user-circle"></i>
                <p>wecode_bootcamp</p>
              </div>
              <i className="fas fa-ellipsis-h"></i>
            </div>

            <div className="feedImg"></div>

            <div className="commentWrapper">
              <div className="commentIconWrapper">
                <div>
                  <i className="fas fa-heart"></i>
                  <i className="far fa-comment"></i>
                  <i className="far fa-envelope-open"></i>
                </div>
                <i className="far fa-bookmark"></i>
              </div>

              <div className="commentLike">
                <i className="fas fa-user-circle"></i>
                <p>
                  <span className="name">we-dohyeon</span>님 외 10명이
                  좋아합니다
                </p>
              </div>

              <ul id="commentLists">
                <li>
                  <span className="name">soon_tae</span>
                  <span>위워크에서 진행한 축구 클래스...</span>
                </li>
              </ul>
            </div>

            <div className="comment">
              <input id="commentInput" type="text" placeholder="댓글 달기..." />
              <button id="submit">게시</button>
            </div>
          </section>
        </article>

        <aside>
          <section className="sectionWrapper">
            <i className="fas fa-user-circle"></i>
            <div className="sectionInner">
              <p>wecode_bootcamp</p>
              <p>Wecode | 위코드</p>
            </div>
          </section>

          <div className="contentWrapper">
            <div className="contentHeader">
              <p>스토리</p>
              <p>모두 보기</p>
            </div>
            <section className="sectionWrapper">
              <i className="fas fa-user-circle"></i>
              <div className="sectionInner">
                <p>wecode_bootcamp</p>
                <p>Wecode | 위코드</p>
              </div>
            </section>
            <section className="sectionWrapper">
              <i className="fas fa-user-circle"></i>
              <div className="sectionInner">
                <p>wecode_bootcamp</p>
                <p>Wecode | 위코드</p>
              </div>
            </section>
            <section className="sectionWrapper">
              <i className="fas fa-user-circle"></i>
              <div className="sectionInner">
                <p>wecode_bootcamp</p>
                <p>Wecode | 위코드</p>
              </div>
            </section>
            <section className="sectionWrapper">
              <i className="fas fa-user-circle"></i>
              <div className="sectionInner">
                <p>wecode_bootcamp</p>
                <p>Wecode | 위코드</p>
              </div>
            </section>
          </div>

          <section className="recommendationWrapper"></section>
        </aside>
      </main>
    </div>
  );
}

export default Main;
