import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  async function Handler(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("image", image);
    formData.append("caption", caption);

    navigate("/feed");

    try {
      await axios.post(
        "https://small-insta.onrender.com/create-post",
        formData,
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="create-box">
      <form onSubmit={Handler}>
        <div className="text">
          <h1>Create Post</h1>
        </div>
        <input
          type="file"
          required
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <input
          type="text"
          placeholder="Enter Caption"
          required
          onChange={(e) => {
            setCaption(e.target.value);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
