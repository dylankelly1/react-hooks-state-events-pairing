import React, { useState } from 'react';
import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);

  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [comments, setComments] = useState(video.comments);

  const handleUpvote = () => {
    setUpvotes(upvotes +1);
  };

  const handleDownvote = () => {
    setUpvotes(downvotes +1);
  };

  const handleComments = () => {
    setComments(!comments);
  };


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <header>
      React Today and Tomorrow and 90% Cleaner React With Hooks
      </header>
      <button onClick={handleUpvote}>👍 {upvotes}</button>
      <button onClick={handleDownvote}>👎 {downvotes}</button>
      <button onClick={handleComments}> {comments ? 'Hide Comments' : 'Show Comments'}</button>



      
    </div>
  );
}

export default App;
