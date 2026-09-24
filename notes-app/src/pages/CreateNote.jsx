import React from "react";
import Navbar from "../components/NavBar";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const CreateNote = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    date: "",
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
      date: "",
    });

    navigate("/");
  };
  return (
    <div>
      <Navbar />

      {/* Form Container */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 shadow-inner">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
              tilte
            </label>
            <input
              type="text"
              name="tilte"
              value={formData.title}
              onChange={handleChange}
              placeholder="enter your email"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
              content
            </label>
            <input
              type="text-area"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="enter note content"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-xl shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            type="submit"
          >
            <span>create Accont</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
