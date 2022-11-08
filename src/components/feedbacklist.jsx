import FeedbackItem from "./feedbackItem";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";
import Spinner from "./common/Spinner";

const FeedbackList = ({ onDelete }) => {
  const { feedback: items, isLoading } = useContext(FeedbackContext);

  if ((!isLoading && !items) || items.length === 0)
    return <h4>No Items found</h4>;
  return isLoading ? (
    <Spinner />
  ) : (
    items.map((item) => <FeedbackItem key={item.id} item={item} />)
  );
};

export default FeedbackList;
