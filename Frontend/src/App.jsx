import { Routes, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Feed from "./components/Feed";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
