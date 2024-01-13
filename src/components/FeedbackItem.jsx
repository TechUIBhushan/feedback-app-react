import { FaTimes, FaEdit } from "react-icons/fa";
import { useState } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";

function FeedbackItem({ item, handelDelete }) {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an example of Feedback Item");

  //   const addRating = () => {
  //     setRating((prev) => {
  //       return prev + 1;
  //     });
  //   };
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handelDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={addRating}>Add Rating</button> */}
    </Card>
  );
}

FeedbackItem.prototype = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
