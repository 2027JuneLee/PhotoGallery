import './App.css';
import LoginPage from './LoginPage';
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  
      <Router>
        <div>
          <Routes>
        <Route path="/" element={<LoginPage/>}/>
        </Routes>
        </div>
      </Router>
      

  );
}

export default App;
