import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const res = await axios.get("https://small-insta.onrender.com/feed");
      setPosts(res.data.posts);
    }

    getPosts();
  }, []);

  return (
    <div className="feed-box">
      {posts.map((post) => {
        return (
          <div className="post" key={post._id}>
            <img src={post.image} alt="image" />
            <p>{post.caption}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
