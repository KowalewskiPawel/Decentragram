import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1vh auto;
  width: 20vw;

  & > * {
    margin: 1rem;
  }
`;

const PostsWrapper = styled.div`
  & > img {
    width: 20vw;
    height: 20vh;
  }
`;

const Posts = () => {
  const [inputValue, setInputValue] = useState("");
  const [posts, setPosts] = useState([]);

  const formSubmit = (event) => {
    event.preventDefault();
    setPosts((prevPosts) => [...prevPosts, { url: inputValue }]);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Wrapper>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Image URL"
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
      <PostsWrapper>
        {posts.map((post) => (
          <img src={post.url} alt="" />
        ))}
      </PostsWrapper>
    </Wrapper>
  );
};

export default Posts;
