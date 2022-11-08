import { useState } from "react";
import Button from "./common/Button";
import Card from "./common/card";
import SelectRating from "./SelectRating";
import { useContext, useEffect } from "react";
import FeedbackContext from "./context/FeedbackContext"; 

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [errorMsg, setErrorMsg] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const { addFeedBack, editItem, updateFeedbackItem } =
    useContext(FeedbackContext);

  useEffect(() => {
    const { item, edit } = editItem;

    if (edit) {
      setText(item.text);
      setRating(item.rating);
      setIsDisabled(false);
    }
  }, [editItem]);

  const handleTextChange = ({ target }) => {
    if (text.trim() === "") {
      setErrorMsg("This field is required");
      setIsDisabled(true);
    } else if (text.trim().length <= 10) {
      setErrorMsg("This field should be 10 or more characters long");
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      setErrorMsg(null);
    }

    setText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setErrorMsg("This field is required");
      return;
    } else if (text.trim().length <= 10) {
      setErrorMsg("This field should be 10 or more characters long");
      return;
    } else {
      setErrorMsg(null);
    }

    const { item, edit } = editItem;
    if (edit) {
      updateFeedbackItem(item.id, { text, rating });
    } else {
      const newFeedback = { text, rating };
      addFeedBack(newFeedback);
      console.log(newFeedback);
    }

    setText("");
    setIsDisabled(true);
  };

  const setSelectedRating = (rating) => {
    setRating(rating);
  };
  return (
    <Card reverse={false}>
      <h2>How would you rate our service to you?</h2>
      <form onSubmit={handleSubmit}>
        <SelectRating setSelectedRating={setSelectedRating} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review....."
            onChange={handleTextChange}
            value={text}
          />
          <Button version="primary" type="submit" isDisabled={isDisabled}>
            Send
          </Button>
        </div>
        {errorMsg && <div className="message">{errorMsg}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
