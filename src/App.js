import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";
function App() {
  //   const heading = "Blog post";
  //   const body = "This is blog posts:";
  //   const comments = [
  //     { id: 1, text: "comments 1" },
  //     { id: 2, text: "comments 2" },
  //     { id: 3, text: "comments 3" },
  //   ];
  //   const showComments = true;
  //   const commentsBlock = (
  //     <div>
  //       <ul>
  //         {comments.map((item, index) => {
  //           return <li key={index}>{item.text}</li>;
  //         })}
  //       </ul>
  //     </div>
  //   );
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure do you want to delete feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handelDelete={deleteFeedback} />
      </div>

      {/* <h1>{heading.toUpperCase()}</h1>
      <p>{body}</p>
      {showComments && commentsBlock} */}
    </>
  );
}
export default App;
