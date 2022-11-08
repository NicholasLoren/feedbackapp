import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  let average =
    feedback.reduce(
      (accumulator, current) => (accumulator += +current.rating),
      0
    ) / feedback.length;
  average = average.toFixed(1);
  return (
    <div className="feedback-stats">
      <div>{feedback.length} reviews</div>
      <div>{average} rating</div>
    </div>
  );
};

export default FeedbackStats;
