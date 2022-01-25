import React, { useEffect, useState } from "react";
import Feed from "../Feed/Feed";

function Feeds() {
  const [feedsData, setFeedsData] = useState([]);

  useEffect(() => {
    fetch("data/feedsData.json")
      .then((res) => res.json())
      .then((data) => {
        setFeedsData(data);
      });
  }, []);

  return (
    <div className="feeds">
      {feedsData.map((feedData) => {
        return (
          <Feed
            key={feedData.id}
            userName={feedData.userName}
            userUrl={feedData.userUrl}
            profileImage={feedData.profileImage}
            feedImg={feedData.feedImg}
            likes={feedData.likes}
            userComment={feedData.userComment}
            timestamp={feedData.timestamp}
          />
        );
      })}
    </div>
  );
}

export default Feeds;
