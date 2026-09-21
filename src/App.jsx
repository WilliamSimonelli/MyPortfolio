import React from 'react';
import { Box } from '@mui/material';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <Box sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        color: 'text.primary',
      }}>
        <Header />
        <Hero />
        <Timeline />
        <Skills />
        <Contact />
        <Footer />
      </Box>
    </LanguageProvider>
  );
}

export default App;
