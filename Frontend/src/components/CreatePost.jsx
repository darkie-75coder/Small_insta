import { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  async function Handler(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("image", image);
    formData.append("caption", caption);

    await axios.post("http://localhost:3000/create-post", formData);
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
