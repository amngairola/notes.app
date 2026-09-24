import React from "react";
import { FileText } from "lucide-react";

const NoteCard = ({ note, setSelectedNote, selectedNote }) => {
  const isSelected = selectedNote?.id === note.id;

  return (
    <div
      onClick={() => setSelectedNote(note)}
      className={`group flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-all border text-sm ${
        isSelected
          ? "bg-indigo-950/40 border-indigo-500/40 text-indigo-200 shadow-sm"
          : "bg-transparent border-transparent text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-200"
      }`}
    >
      <FileText
        className={`w-4 h-4 flex-shrink-0 ${
          isSelected
            ? "text-indigo-400"
            : "text-zinc-500 group-hover:text-zinc-300"
        }`}
      />
      <span className="truncate font-medium tracking-tight">
        {note.title || "Untitled Note"}
      </span>
    </div>
  );
};

export default NoteCard;
