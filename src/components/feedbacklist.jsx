import FeedbackItem from "./feedbackItem";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

const FeedbackList = ({ onDelete }) => {
  const { feedback: items } = useContext(FeedbackContext);

  if (!items || items.length === 0) return <h4>No Items found</h4>;
  return items.map((item) => <FeedbackItem key={item.id} item={item} />);
};

export default FeedbackList;
