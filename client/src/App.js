import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import CaseDetails from './pages/CaseDetails';
import Register from './pages/Register';
import CounselingPage from './pages/CounselingPage';
import { Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Box className="container">
          <Sidebar />
          <Box className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/case-details" element={<CaseDetails />} />
              <Route path="/register" element={<Register />} />
              <Route path="/counseling" element={<CounselingPage />} />
            </Routes>
          </Box>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;