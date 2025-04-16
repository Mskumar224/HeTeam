import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import Counseling from './components/Counseling';
import AdvocateFinder from './components/AdvocateFinder';
import Header from './components/Header';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/counseling" element={<Counseling />} />
        <Route path="/advocates" element={<AdvocateFinder />} />
      </Routes>
    </Router>
  );
}

export default App;