import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './components/Header';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import Counseling from './components/Counseling';
import AdvocateFinder from './components/AdvocateFinder';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/counseling" element={<Counseling />} />
          <Route path="/advocates" element={<AdvocateFinder />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;