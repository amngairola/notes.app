import React, { useState } from "react";
import NoteCard from "./NoteCard";
import { LogOut } from "lucide-react";

const LeftSidebar = ({ notes }) => {
  console.log(notes);

  const handleLogOut = () => {};
  const handleCreateNote = () => {};

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <aside>
      <div className="flex flex-col m-2 p-3 border border-cyan-300">
        <button onClick={handleCreateNote}>New Notes</button>

        <input
          type="text"
          placeholder="search notes.."
          value={input}
          onChange={handleChange}
          className="border border-red-300"
        />
      </div>

      <div className="flex flex-col m-2 p-3 border border-cyan-300">
        <h3>All Notes </h3>

        {notes.length === 0 ? (
          <p> 0 No notes found</p>
        ) : (
          notes.map((note) => <NoteCard key={note.id} note={note} />)
        )}
      </div>

      <button onClick={handleLogOut}>LogOut</button>
    </aside>
  );
};

export default LeftSidebar;
