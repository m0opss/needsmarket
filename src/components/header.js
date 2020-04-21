import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import '../styles/header.scss'

export default function MenuAppBar() {
  // const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // For top-menu Dropbox ///////////////////////
  let account = (auth && (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
      <AccountCircle />
      <p>Валерий</p>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Мои заказы</MenuItem>
        <MenuItem onClick={handleClose}>Выход</MenuItem>
      </Menu>
    </>
  ))

  // ////////////////////////////////////////////

  // For top-menu sticky ///////////////////////
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("top-menu").style.top = "0";
    } else {
      document.getElementById("top-menu").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <>
      <nav id="top-menu">

        <div className="top-menu_item -logo">
          <a href='#'>
            <img src="/images/logo.png" alt="" width='120px' height='40px' />
          </a>
        </div>

        <div className="top-menu_item -address">
          <a href='#'>
            <img src="/images/geo.png" alt="" width='15px' height='19px'/>
            <p>Адрес доставки</p>
          </a>
        </div>

        <div className="top-menu_composition">
          <div className="top-menu_item -account">
            {account}
          </div>

          <div className="top-menu_item -basket">
            <a href='#'>
              <img src="/images/basket.png" alt="" width='16px' height='17px'/>
              <p>Корзина</p>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}