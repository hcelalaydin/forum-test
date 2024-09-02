import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Topic from './components/Topic';
import { Topic as TopicType, Comment } from './types/Types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'; // Oluşturduğumuz temayı içe aktar
import Sidebar from './components/Sidebar';
import ContentPane from './components/ContentPane';
import Footer from './components/Footer';

const App: React.FC = () => {

  const [drawerOpen, setDrawerOpen] = useState(true); // Sidebar'ın açık olup olmadığını takip ediyoruz

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen); // Aç/Kapat fonksiyonu
  };


  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
    <Navbar toggleDrawer={toggleDrawer} />
    {/* Navbar'ın altındaki alan flex container olarak yapılandırılıyor */}
      <div style={{ display: 'flex', paddingTop: '64px' }}> {/* Navbar yüksekliğine göre padding ayarı */}
      {/* Sidebar open state'i prop olarak gönderiliyor */}
      <Sidebar open={drawerOpen} />
      <main 
            style={{ 
              marginTop: '32px',
              flexGrow: 1, 
              transition: 'margin-left 0.3s ease', 
              marginLeft: drawerOpen ? 24 : 32, // Sidebar genişliği ile uyumlu hale getiriliyor
              width: drawerOpen ? 'calc(100% - 240px)' : '100%', // Sağ taraf sabit kalıyor
            }}
          >
            <ContentPane />
          </main>
        </div>

      <Footer />
    </Router>
  </ThemeProvider>
  );
};
export default App;
