import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Tema modu (Işık)
    primary: {
      main: '#4285F4', // Google+ ana rengi
    },
    secondary: {
      main: '#DB4437', // İkincil renk (kırmızı tonları)
    },
    background: {
      default: '#F9F9F9', // Arka plan rengi
      paper: '#FFFFFF', // Kart ve panel arka planı
    },
    text: {
      primary: '#333333', // Ana metin rengi
      secondary: '#757575', // Yardımcı metin rengi
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Ana yazı tipi
    h1: {
      fontWeight: 500, // Başlık 1 için kalınlık
      fontSize: '2.5rem', // Büyük başlık boyutu
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    button: {
      textTransform: 'none', // Butonlarda büyük harf kullanmamak için
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8, // Kart ve butonlarda yuvarlatılmış köşeler
  },
  shadows: [
    'none',
    '0px 1px 3px rgba(0, 0, 0, 0.12)',
    '0px 3px 6px rgba(0, 0, 0, 0.16)',
    '0px 10px 20px rgba(0, 0, 0, 0.2)', // Dördüncü gölge örneği
    '0px 15px 25px rgba(0, 0, 0, 0.22)',
    '0px 20px 30px rgba(0, 0, 0, 0.24)',
    '0px 25px 35px rgba(0, 0, 0, 0.26)',
    '0px 30px 40px rgba(0, 0, 0, 0.28)',
    '0px 35px 45px rgba(0, 0, 0, 0.30)',
    '0px 40px 50px rgba(0, 0, 0, 0.32)',
    '0px 45px 55px rgba(0, 0, 0, 0.34)',
    '0px 50px 60px rgba(0, 0, 0, 0.36)',
    '0px 55px 65px rgba(0, 0, 0, 0.38)',
    '0px 60px 70px rgba(0, 0, 0, 0.40)',
    '0px 65px 75px rgba(0, 0, 0, 0.42)',
    '0px 70px 80px rgba(0, 0, 0, 0.44)',
    '0px 75px 85px rgba(0, 0, 0, 0.46)',
    '0px 80px 90px rgba(0, 0, 0, 0.48)',
    '0px 85px 95px rgba(0, 0, 0, 0.50)',
    '0px 90px 100px rgba(0, 0, 0, 0.52)',
    '0px 95px 105px rgba(0, 0, 0, 0.54)',
    '0px 100px 110px rgba(0, 0, 0, 0.56)',
    '0px 105px 115px rgba(0, 0, 0, 0.58)',
    '0px 110px 120px rgba(0, 0, 0, 0.60)',
    '0px 110px 120px rgba(0, 0, 0, 0.62)',
  ],
});

export default theme;