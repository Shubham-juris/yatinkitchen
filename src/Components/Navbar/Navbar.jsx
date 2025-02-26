import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../assets/favicon.jpg'
const drawerWidth = 240;
const navItems = ['HOME', 'MENU', 'ABOUT US', "YATIN'S GASTROPUB"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={handleDrawerToggle}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          overflow: 'hidden',
          backgroundColor: '#fff',
          display: 'flex',
          fontFamily:'Noto Sans, Arial, sans-serif',
          justifyContent: 'center',
          alignContent: 'center'
        }}
      >
        <Toolbar sx={{
          display: 'flex',
          justifyContent: { md: 'center', xs: 'flex-start' },
          alignItems: 'center'
        }}>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            {/* <MenuIcon /> */}
            <Typography sx={{
              color: 'brown',
              fontFamily:'Quicksand, sans-serif',
              fontWeight:'900'
            }}>YATINKITCHEN</Typography>
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'block' }, fontFamily: 'Quicksand, sans-serif' }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000000' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" >
        <Toolbar />
      </Box>
    </Box>
    </>
  );
}

export default Navbar;