import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import FeedbackList from "./components/feedbacklist";
import FeedbackStats from "./components/feedbackstats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/About";
import AboutPageIcon from "./components/AboutPageIcon";
import { FeedbackProvider } from "./components/context/FeedbackContext";

const App = () => {


  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutPageIcon />
                </>
              }
            ></Route>
            <Route path="/about/" element={<AboutPage />}></Route>
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
