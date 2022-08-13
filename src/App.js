import './App.css';
import LoginPage from './LoginPage';
import RealLoginPage from './RealLoginPage';
import SignUpPage from './SignUpPage';
import SelectWally from './SelectionPage'
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  
      <Router>
        <div>
          <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<RealLoginPage/>}/>
        <Route path='/select-1' element={<SelectWally/>}/>
        </Routes>
        </div>
      </Router>
      

  );
}

export default App;
