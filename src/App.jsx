import React, { useState } from "react";
import Container from "./components/container";
import Card from "./components/card";
import posts from "./components/posts.js";
import './App.css'

const App = () => {

  const [postList, setPostList] = useState(posts)

  const removePost = (id) => {
    setPostList(postList.filter((post) => post.id !== id))
  }

  return (
    <Container>
      {postList.map((post) => (
        <Card key={post.id} post={post} removePost={ removePost } />
      ))}
    </Container>
  );
};

export default App;