import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import { posts } from "../data/blog";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="My Personal Blog" />
      <About
        image="https://via.placeholder.com/215"
        about="A blog about everything and nothing."
      />
      <ArticleList posts={posts} />
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
