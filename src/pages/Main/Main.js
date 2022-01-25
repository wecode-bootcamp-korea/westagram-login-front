import React from "react";
import Nav from "../../components/Nav/Nav";
import Feeds from "./components/Feeds/Feeds";
import "./Main.scss";

function Main() {
  return (
    <>
      <Nav />
      <main className="main">
        <section className="mainFeeds">
          <div className="topFeedBox">
            <ul>
              <li>
                <img
                  src="https://wecode.co.kr/static/media/shin.76d5cc6c.png"
                  alt="shinyoung님의 프로필 사진"
                />
                <p>shinyoung</p>
              </li>
              <li>
                <img
                  src="https://media.vlpt.us/images/lang/profile/fb836af2-4c62-4919-a004-86d77b82bd52/KakaoTalk_20210314_013949813.jpg?w=240"
                  alt="laeyoung님의 프로필 사진"
                />
                <p>laeyoung</p>
              </li>
              <li>
                <img
                  src="https://wecode.co.kr/static/media/yang.0aac1edb.png"
                  alt="joonsiknim님의 프로필 사진"
                />
                <p>joonsiknim</p>
              </li>
              <li>
                <img
                  src="https://wecode.co.kr/static/media/hwang.694bc0f5.png"
                  alt="yeonuknim님의 프로필 사진"
                />
                <p>yeonuknim</p>
              </li>
              <li>
                <img
                  src="https://wecode.co.kr/static/media/dohyeon.4589ff76.png"
                  alt="dohyeon님의 프로필 사진"
                />
                <p>dohyeon</p>
              </li>
              <li>
                <img
                  src="https://ca.slack-edge.com/T0F25KY9Y-U02HZA6503F-afda8a71d287-512"
                  alt="jeongil님의 프로필 사진"
                />
                <p>jeongil</p>
              </li>
              <li>
                <img
                  src="https://ca.slack-edge.com/TH0U6FBTN-U01HXJC2HK4-3ec600d70045-512"
                  alt="lang님의 프로필 사진"
                />
                <p>lang</p>
              </li>
            </ul>
          </div>
          <Feeds />
        </section>
        <aside className="mainRightSide">
          <header className="asideAccount">
            <div className="asideProfile">
              <a href="https://www.instagram.com/laeyoung/">
                <img
                  className="profileImage"
                  alt="laeyoung님의 프로필 사진"
                  src="https://media.vlpt.us/images/lang/profile/fb836af2-4c62-4919-a004-86d77b82bd52/KakaoTalk_20210314_013949813.jpg?w=240"
                />
              </a>
            </div>
            <div>
              <p>
                <a
                  className="username"
                  href="https://www.instagram.com/laeyoung/"
                >
                  laeyoung
                </a>
              </p>
              <p className="asideNickname">랭</p>
            </div>
            <div className="asideBtnBox">
              <button className="asideBtn">전환</button>
            </div>
          </header>
          <main className="asideRecommendation">
            <div className="recommendComments">
              <div>회원님을 위한 추천</div>
              <div className="asideBtnBox">
                <button className="asideBtn">모두 보기</button>
              </div>
            </div>
            <div className="recommendContainer">
              <div className="recommendInfo">
                <div>
                  <a href="https://www.instagram.com/taeknim/">
                    <img
                      alt="lang님의 프로필 사진"
                      className="recommend profileImage"
                      src="https://ca.slack-edge.com/TH0U6FBTN-U01HXJC2HK4-3ec600d70045-512"
                    />
                  </a>
                </div>
                <div>
                  <div>
                    <a
                      className="username"
                      href="https://www.instagram.com/lang/"
                    >
                      lang
                    </a>
                  </div>
                  <div className="asideNickname">회원님을 팔로우합니다</div>
                </div>
                <div className="asideBtnBox">
                  <button className="asideBtn">팔로우</button>
                </div>
              </div>
              <div className="recommendInfo">
                <div>
                  <a href="https://www.instagram.com/joonsiknim/">
                    <img
                      alt="joonsiknim님의 프로필 사진"
                      className="recommend profileImage"
                      src="https://wecode.co.kr/static/media/yang.0aac1edb.png"
                    />
                  </a>
                </div>
                <div>
                  <div>
                    <a
                      className="username"
                      href="https://www.instagram.com/joonsiknim/"
                    >
                      joonsiknim
                    </a>
                  </div>
                  <div className="asideNickname">회원님을 팔로우합니다</div>
                </div>
                <div className="asideBtnBox">
                  <button className="asideBtn">팔로우</button>
                </div>
              </div>
              <div className="recommendInfo">
                <div>
                  <a href="https://www.instagram.com/yeonuknim/">
                    <img
                      alt="yeonuknim님의 프로필 사진"
                      className="recommend profileImage"
                      src="https://wecode.co.kr/static/media/hwang.694bc0f5.png"
                    />
                  </a>
                </div>
                <div>
                  <div>
                    <a
                      className="username"
                      href="https://www.instagram.com/yeonuknim/"
                    >
                      yeonuknim
                    </a>
                  </div>
                  <div className="asideNickname">회원님을 팔로우합니다</div>
                </div>
                <div className="asideBtnBox">
                  <button className="asideBtn">팔로우</button>
                </div>
              </div>
              <div className="recommendInfo">
                <div>
                  <a href="https://www.instagram.com/dohyeon/">
                    <img
                      alt="dohyeon님의 프로필 사진"
                      className="recommend profileImage"
                      src="https://wecode.co.kr/static/media/dohyeon.4589ff76.png"
                    />
                  </a>
                </div>
                <div>
                  <div>
                    <a
                      className="username"
                      href="https://www.instagram.com/dohyeon/"
                    >
                      dohyeon
                    </a>
                  </div>
                  <div className="asideNickname">회원님을 팔로우합니다</div>
                </div>
                <div className="asideBtnBox">
                  <button className="asideBtn">팔로우</button>
                </div>
              </div>
              <div className="recommendInfo">
                <div>
                  <a href="https://www.instagram.com/jeongil/">
                    <img
                      alt="jeongil님의 프로필 사진"
                      className="recommend profileImage"
                      src="https://ca.slack-edge.com/T0F25KY9Y-U02HZA6503F-afda8a71d287-512"
                    />
                  </a>
                </div>
                <div>
                  <div>
                    <a
                      className="username"
                      href="https://www.instagram.com/jeongil/"
                    >
                      jeongil
                    </a>
                  </div>
                  <div className="asideNickname">회원님을 팔로우합니다</div>
                </div>
                <div className="asideBtnBox">
                  <button className="asideBtn">팔로우</button>
                </div>
              </div>
            </div>
          </main>
          <footer className="asidePolicies">
            <ul>
              <li className="moreInfo">
                <a href="https://about.instagram.com/">소개</a>
              </li>
              <li className="moreInfo">
                <a href="https://help.instagram.com/">도움말</a>
              </li>
              <li className="moreInfo">
                <a href="https://about.instagram.com/blog/">홍보 센터</a>
              </li>
              <li className="moreInfo">
                <a href="https://www.instagram.com/developer/">API</a>
              </li>
              <li className="moreInfo">
                <a href="https://www.instagram.com/about/jobs/">채용 정보</a>
              </li>
              <li className="moreInfo">
                <a href="https://www.instagram.com/legal/privacy/">
                  개인정보처리방침
                </a>
              </li>
              <li className="moreInfo">
                <a href="https://www.instagram.com/legal/terms/">약관</a>
              </li>
              <li className="moreInfo">
                <a href="https://www.instagram.com/explore/locations/">위치</a>
              </li>
              <li className="moreInfo">
                <a href="https://www.instagram.com/directory/profiles/">
                  인기 계정
                </a>
              </li>
              <li className="moreInfo">
                <a href="https://www.instagram.com/directory/hashtags/">
                  해시태그
                </a>
              </li>
              <li className="moreInfo">
                <span>언어</span>
              </li>
            </ul>
            <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
          </footer>
        </aside>
      </main>
    </>
  );
}

export default Main;
