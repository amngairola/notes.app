import React, { useState } from "react";
import Navbar from "../components/NavBar";
import { ArrowRight, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      title: "",
      content: "",
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full space-y-6">
          {/* Header branding */}
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto shadow-lg shadow-indigo-600/10">
              <FileText className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100">
              Create New Note
            </h1>
            <p className="text-sm text-zinc-400">
              Capture your ideas instantly into your workspace
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                  title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter note title..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* Content Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                  content
                </label>
                <textarea
                  rows={4}
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Enter note content..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-xl shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                type="submit"
              >
                <span>create Note</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
