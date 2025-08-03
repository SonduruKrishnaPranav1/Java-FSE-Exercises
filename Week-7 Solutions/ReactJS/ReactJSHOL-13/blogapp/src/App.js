import React, { useState } from 'react';

const BookDetails = () => <h2>Book Details Component</h2>;
const BlogDetails = () => <h2>Blog Details Component</h2>;
const CourseDetails = () => <h2>Course Details Component</h2>;

function App() {
  const [section, setSection] = useState("book");

  const renderComponent = () => {
    switch (section) {
      case "book": return <BookDetails />;
      case "blog": return <BlogDetails />;
      case "course": return <CourseDetails />;
      default: return <h2>Select a Section</h2>;
    }
  };

  return (
    <div className="App">
      <h1>Blogger App</h1>
      <button onClick={() => setSection("book")}>Book</button>
      <button onClick={() => setSection("blog")}>Blog</button>
      <button onClick={() => setSection("course")}>Course</button>
      {renderComponent()}
    </div>
  );
}

export default App;
