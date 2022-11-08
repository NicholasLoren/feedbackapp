import Card from "./common/card";
import PropTypes from "prop-types";
import { FaTimes, FaPen } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

const FeedbackItem = ({ item, onDelete }) => {
  const { handleDelete, setFeedbackItemEdit } = useContext(FeedbackContext);
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => setFeedbackItemEdit(item)}>
        <FaPen color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
