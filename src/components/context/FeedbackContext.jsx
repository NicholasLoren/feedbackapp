import { createContext, useState, useEffect } from "react";
import FeedbackData from "../../data/feedbackdata";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [isLoading, setIsLoading] = useState(true);

  //fetch data from server
  useEffect(() => {
    fetchFeedBacks();
  }, []);

  const fetchFeedBacks = async () => {
    const response = await fetch("/feedback?_sort=id&_order=desc");

    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };
  // deleting a new feedback item
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this review")) {
      const response = await fetch(`/feedback/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      setFeedback(feedback.filter((item) => item.id !== data.id));
    }
  };
  // Creating a new feed back item
  const addFeedBack = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    const newFeedBacks = [data, ...feedback];
    setFeedback(newFeedBacks);
  };
  //updating a feedback item
  const updateFeedbackItem = async (itemID, update) => {
    const response = await fetch(`/feedback/${itemID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    });
    const data = await response.json();
    const updation = feedback.map((item) =>
      item.id === itemID ? { ...item, ...data } : item
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
        isLoading,
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
