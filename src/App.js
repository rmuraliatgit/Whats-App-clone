import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Login from "./Login";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Routes>
              <Route path="/rooms/:roomId" element={[<Sidebar />, <Chat />]} />
              <Route path="/" element={<Sidebar />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
