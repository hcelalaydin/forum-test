import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface NavbarProps {
  toggleDrawer: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDrawer }) => {
  return(

    <AppBar position="fixed" color="default" sx={{ borderRadius: 1, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar>
      {/* Menü butonu (Yan panel açmak için kullanılabilir) */}
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Ygud Forum
      </Typography>
      <Link href="/" color="inherit" underline="none">
        <Button color="primary" variant="outlined" sx={{ mr: 2 }}>
          Home
        </Button>
      </Link>
      <Link href="/new" color="inherit" underline="none">
        <Button color="primary" variant="contained">
          New
        </Button>
      </Link>
    </Toolbar>
  </AppBar>
);
};

export default Navbar;
