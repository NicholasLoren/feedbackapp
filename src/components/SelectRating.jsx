import { useState, useContext, useEffect } from "react";
import FeedbackContext from "./context/FeedbackContext";

const SelectRating = ({ setSelectedRating }) => {
  const range = [...Array(11).keys()];
  const [selected, setSelected] = useState(10);
  const { editItem } = useContext(FeedbackContext);

  useEffect(() => {
    const { item, edit } = editItem;
    if (edit) {
      setSelected(item.rating);
    }
  }, [editItem]);

  const handleChange = ({ currentTarget }) => {
    setSelected(+currentTarget.value);
    setSelectedRating(+currentTarget.value);
  };

  return (
    <ul className="rating">
      {range.map((item) => (
        <li key={item}>
          <input
            type="radio"
            name="rating"
            checked={selected === item ? "checked" : ""}
            value={item}
            id={`item${item}`}
            onChange={handleChange}
          />
          <label htmlFor={`item${item}`}>{item}</label>
        </li>
      ))}
    </ul>
  );
};

export default SelectRating;
