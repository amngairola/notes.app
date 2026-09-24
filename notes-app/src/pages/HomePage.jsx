import React, { useState } from "react";
import NavBar from "../components/NavBar.jsx";
import LeftSidebar from "../components/LeftSidebar.jsx";
import { FileText, Calendar, ShieldCheck } from "lucide-react";

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

  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <NavBar />

      {/* Main App Layout Container */}
      <div className="flex flex-col lg:flex-row flex-1 bg-zinc-950 min-h-[calc(100vh-4rem)]">
        {/* Left Sidebar Component */}
        <LeftSidebar
          notes={notes}
          setSelectedNote={setSelectedNote}
          selectedNote={selectedNote}
        />

        {/* Right Side Content Viewer */}
        <main className="flex-1 bg-zinc-950 p-6 lg:p-10 flex flex-col justify-center items-center">
          {selectedNote ? (
            <div className="max-w-3xl w-full mx-auto space-y-6 animate-fadeIn self-start">
              {/* Note Meta Header */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Last updated: {selectedNote.date}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Synced</span>
                </div>
              </div>

              {/* Note Title */}
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-zinc-100">
                {selectedNote.title}
              </h2>

              {/* Note Content Body */}
              <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 shadow-xl space-y-4">
                <p className="text-zinc-300 text-base leading-relaxed whitespace-pre-wrap font-normal">
                  {selectedNote.content}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 shadow-xl">
                <FileText className="w-8 h-8 text-zinc-600" />
              </div>
              <h2 className="text-lg font-semibold text-zinc-200">
                No Note Selected
              </h2>
              <p className="text-sm text-zinc-500 max-w-sm mt-1">
                select a note from side bar to view its full contents here.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default HomePage;
