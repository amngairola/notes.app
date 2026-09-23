import React, { useState } from "react";
import NavBar from "../components/NavBar.jsx";
import LeftSidebar from "../components/LeftSidebar.jsx";

const HomePage = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "React Basics",
      content: "Learn components, JSX and props.",
      date: "Today",
    },
    {
      id: 2,
      title: "JavaScript",
      content: "Practice array methods and modern JavaScript.",
      date: "Yesterday",
    },
    {
      id: 3,
      title: "Node.js",
      content: "Learn how servers and APIs work.",
      date: "2 days ago",
    },
  ]);

  return (
    <div>
      <NavBar />
      <h1> THIS IS HOME PAGE </h1>

      <div>
        <LeftSidebar notes={notes} />
      </div>
    </div>
  );
};

export default HomePage;
