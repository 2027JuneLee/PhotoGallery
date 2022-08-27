import "./App.css";
import LoginPage from "./LoginPage";
import RealLoginPage from "./RealLoginPage";
import SignUpPage from "./SignUpPage";
import SelectWally from "./SelectionPage/index";
import SelectRacoon from "./SelectionPage/index2";
import SelectBackground from "./SelectionPage/index-3";
import MainPage from "./MainPage/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/thesupercalifragilisticexpialidocioushomepageforallofwallysfans" element={<MainPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<RealLoginPage />} />
          <Route path="/select-1" element={<SelectWally />} />
          <Route path="/select-2" element={<SelectRacoon />} />
          <Route path="/select-3" element={<SelectBackground />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
