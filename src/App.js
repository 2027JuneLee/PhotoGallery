import "./App.css";
import LoginPage from "./LoginPage";
import RealLoginPage from "./RealLoginPage";
import SignUpPage from "./SignUpPage";
import SelectWally from "./SelectionPage/index";
import SelectRacoon from "./SelectionPage/index2";
import SelectBackground from "./SelectionPage/index-3";
import MainPage from "./MainPage/index";
import Tutorial from "./Tutorial";
import CreatePage from "./CreatePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Temp from "./Temp";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<RealLoginPage />} />
          <Route path="/select-1" element={<SelectWally />} />
          <Route path="/select-2" element={<SelectRacoon />} />
          <Route path="/select-3" element={<SelectBackground />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/create" element={<CreatePage />} />          
          <Route path="/temp" element={<Temp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
