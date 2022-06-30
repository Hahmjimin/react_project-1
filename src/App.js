import React from "react";
import { Link } from "react-router-dom";
import Chating from "./components/chating";
import Chatting from "./components/Chatting";
import Friend from "./components/Friend";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Chatting />} />
          <Route path="/Friend" element={<Friend />} />
          <Route path="/chat" element={<Chating />} />
        </Routes>
      </Router>
    );
  }
}

export default App;