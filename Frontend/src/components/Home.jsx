import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const seePost = () => {
    navigate("/feed");
  };
  const createPost = () => {
    navigate("/create-post");
  };

  return (
    <div className="boxes">
      <div className="btns" onClick={seePost}>
        Your Posts
      </div>
      <div className="btns" onClick={createPost}>
        Create Post
      </div>
    </div>
  );
};

export default Home;
