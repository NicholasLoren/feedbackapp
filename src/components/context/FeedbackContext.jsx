import { createContext, useState } from "react";
import FeedbackData from "../../data/feedbackdata";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  // deleting a new feedback item
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this review")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  // Creating a new feed back item
  const addFeedBack = (newFeedback) => {
    const newFeedBacks = [newFeedback, ...feedback];
    setFeedback(newFeedBacks);
  };
  //updating a feedback item
  const updateFeedbackItem = (itemID, update) => {
    const updation = feedback.map((item) =>
      item.id === itemID ? { ...item, ...update } : item
    );

    setFeedback(updation);
    editItem.edit = false;
  };
  const [editItem, setEditItem] = useState({
    item: {},
    edit: false,
  });

  const setFeedbackItemEdit = (item) => {
    setEditItem({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editItem,
        handleDelete,
        addFeedBack,
        setFeedbackItemEdit,
        updateFeedbackItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
