import React, { useState } from 'react'; // Import React
import video from "../data/video.js";
import Comment from "./comment.js";

function App() {
  console.log("Here's your data:", video);

  const [showComment, setShowComment] = useState(true);
  const [upvoteCount, setUpvoteCount] = useState(video.upvotes);
  const [downvoteCount, setDownvoteCount] = useState(video.downvotes);
  // Function to toggle the visibility of comments
  function toggleComments() {
    setShowComment(!showComment);
  }

  // Function to handle increase in upvotes
  function handleIncreaseUpvotes() {
    video.upvotes += 1; 
    setUpvoteCount(video.upvotes)
  }

  // Function to handle increase in downvotes
  function handleIncreaseDownvotes() {
    video.downvotes += 1;
    setDownvoteCount(video.downvotes)
  }

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

      <h1>{video.title}</h1>

      <p>{video.views} views | Uploaded {video.createdAt}</p>
      
      <button onClick={handleIncreaseUpvotes}>{upvoteCount}👍</button>
      <button onClick={handleIncreaseDownvotes}>{downvoteCount}👎</button>

      <button className="btn-toggle" onClick={toggleComments}>
        {showComment ? 'Hide comments' : 'Show Comments'}  
      </button>
      <hr />
     
      <Comment videoInfo={video.comments}/>
    </div>
  );
}

export default App;
