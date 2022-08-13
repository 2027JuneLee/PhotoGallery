import "./App.css";
import LoginPage from "./LoginPage";
import RealLoginPage from "./RealLoginPage";
import SignUpPage from "./SignUpPage";
import SelectWally from "./SelectionPage/index";
import SelectRacoon from "./SelectionPage/index2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<RealLoginPage />} />
          <Route path="/select-1" element={<SelectWally />} />
          <Route path="/select-2" element={<SelectRacoon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
