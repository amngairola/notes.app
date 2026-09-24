import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Search, FileText, LogOut, User } from "lucide-react";
import NoteCard from "./NoteCard.jsx";

const LeftSidebar = ({ notes, setSelectedNote, selectedNote }) => {
  const [notesData, setNotesData] = useState(notes);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleLogOut = () => {};

  const handleCreateNote = () => {
    console.log("create note button clicked");
    navigate("/createNote");
  };

  const handleChange = (e) => {
    let text = e.target.value;
    setInput(text);
    searchData(text);
  };

  const searchData = (text) => {
    const filterdData = notes.filter((note) =>
      note.title.toLowerCase().includes(text.toLowerCase())
    );
    setNotesData(filterdData);
    console.log(filterdData);
  };

  return (
    <aside className="w-full lg:w-80 border-r border-zinc-800/80 bg-zinc-950/80 flex flex-col h-[calc(100vh-4rem)] justify-between relative">
      {/* Top Container: New Note Button & Search Input */}
      <div className="p-4 space-y-3 border-b border-zinc-800/80">
        <button
          onClick={handleCreateNote}
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 px-4 rounded-xl shadow-lg shadow-indigo-600/20 transition-all active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          <span>New Notes</span>
        </button>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="search notes.."
            value={input}
            onChange={handleChange}
            className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl pl-9 pr-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      {/* Middle Container: All Notes List (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            All Notes
          </h3>
          <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md font-medium">
            {notesData.length}
          </span>
        </div>

        <div className="space-y-1">
          {notesData.length === 0 ? (
            <div className="text-center py-12 px-4">
              <FileText className="w-8 h-8 text-zinc-700 mx-auto mb-2" />
              <p className="text-sm text-zinc-400 font-medium">
                0 No notes found
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                Try tweaking your search.
              </p>
            </div>
          ) : (
            notesData.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                setSelectedNote={setSelectedNote}
                selectedNote={selectedNote}
              />
            ))
          )}
        </div>
      </div>

      {/* Bottom Container: User Profile & LogOut */}
      <div className="p-3 border-t border-zinc-800/80 bg-zinc-900/40 space-y-2">
        {/* User Profile Card */}
        <div className="flex items-center gap-3 p-2 rounded-xl bg-zinc-900/80 border border-zinc-800/80">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 flex items-center justify-center text-zinc-300 font-semibold shadow-sm">
            <User className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-zinc-200 truncate">
              Aman Gairola
            </p>
            <p className="text-xs text-zinc-500 truncate">
              amngairola@gmail.com
            </p>
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
        </div>

        {/* LogOut Button */}
        <button
          onClick={handleLogOut}
          className="w-full flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800/80 border border-zinc-800 text-zinc-300 hover:text-red-400 text-sm font-medium py-2 px-3 rounded-xl transition-all"
        >
          <LogOut className="w-4 h-4" />
          <span>LogOut</span>
        </button>
      </div>
    </aside>
  );
};

export default LeftSidebar;
