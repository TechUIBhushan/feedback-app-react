import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelected from "./RatingSelected";
function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const handelTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Message must be 10 charector long");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us </h2>
        <RatingSelected />
        <div className="input-group">
          <input
            onChange={handelTextChange}
            type="text"
            placeholder="write a review"
            value={text}
          />
          <Button isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
