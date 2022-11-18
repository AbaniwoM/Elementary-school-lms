import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './components/features/userSlice';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/HomePage';
import Maths from './components/SubjectPage/Maths';
import English from './components/SubjectPage/English';
import ElemScience from './components/SubjectPage/ElemScience';



function App() {
  const student = useSelector(selectUser);

  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
          <Route path="/" element={student ? <LandingPage /> : <Login />} />
          <Route path="/maths" element={<Maths />} />
          <Route path="/english" element={<English />} />
          <Route path="/science" element={<ElemScience />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// {user ? <LandingPage /> : <Login />}
// <LandingPage />