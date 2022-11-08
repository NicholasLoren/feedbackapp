import Card from "../common/card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>
          This is a component used to leave a feedback for a product or services
        </p>
        <p>Version: 1.0.0</p>
        <Link to="/">Back to homepage</Link>
      </div>
    </Card>
  );
};

export default AboutPage;
