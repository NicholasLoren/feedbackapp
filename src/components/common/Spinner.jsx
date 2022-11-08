import SpinnerImage from "../Assets/snail spinner.gif";

const Spinner = () => {
  return (
    <img
      src={SpinnerImage}
      alt="Loading"
      style={{
        width: "300px",
        height: "300px",
        display: "block",
        margin: "auto",
      }}
    />
  );
};

export default Spinner;
