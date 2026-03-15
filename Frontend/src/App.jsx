import { Routes, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Feed from "./components/Feed";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
};

export default App;
