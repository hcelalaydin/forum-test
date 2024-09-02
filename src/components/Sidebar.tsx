// src/components/Sidebar.tsx
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


interface SidebarProps {
  open: boolean; // Sidebar'ın açık/kapalı durumunu belirten prop
}

const Sidebar: React.FC<SidebarProps> = ({ open }) => {

  return (
    <>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          transition: 'margin-left 0.5s ease',
          width: open ? 240 : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            top: '64px', // Navbar'ın altında başlar
            //bottom: '32px',
            borderRadius: 1
          },
        }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Topics" />
          </ListItem>
          {/* Diğer menü öğeleri buraya */}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
