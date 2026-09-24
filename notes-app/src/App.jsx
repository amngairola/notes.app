import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Loginpage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/signUpPage.jsx";
import CreateNote from "./pages/CreateNote.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/createNote" element={<CreateNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
