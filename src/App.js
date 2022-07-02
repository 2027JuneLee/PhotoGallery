import './App.css';
import LoginPage from './LoginPage';
import RealLoginPage from './RealLoginPage';
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  
      <Router>
        <div>
          <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/login" element={<RealLoginPage/>}/>
        </Routes>
        </div>
      </Router>
      

  );
}

export default App;
