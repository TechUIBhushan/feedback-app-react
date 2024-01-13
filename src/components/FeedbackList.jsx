import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback, handelDelete }) {
  console.log({ feedback });
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          <FeedbackItem key={item.id} item={item} handelDelete={handelDelete} />
        );
      })}
    </div>
  );
}

FeedbackList.prototype = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
