import React from "react";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./HeaderStyle";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Notification from "./ActionTab/Notification";
import Profile from "./ActionTab/Profile";
import Messages from "./ActionTab/Messages";
import Gerb from '../../assets/gerb.png';
import {Link} from "react-router-dom";
export default function NavbarComponent({ handleDrawerToggle }) {
  const classes = useStyles();
  return (
    <AppBar >
      <Toolbar className={classes.toolbar}>
        <Box>
        
          <Typography className={classes.logo}>
           <Link style={{textDecoration:"none",color:"white",cursor:"pointer",letterSpacing:"5px"}} to="/"><h1 >Asosiy sahifa</h1></Link> 
          </Typography>
        </Box>
        <Box>
        <Typography className={classes.logo} style={{display:"flex",alignItems:"center"}}>
          <h2 style={{letterSpacing:"5px",width:"200px",lineHeight:"35px"}}>O'zbekiston Respublikasi</h2 >
            <img style={{margin:"10px 20px",cursor:"pointer"}} src={Gerb} alt='logo'  width={"78px"}/>
            <h2 style={{letterSpacing:"5px",width:"300px",lineHeight:"35px"}}>Moliya Vazirligi Yagona Reestri</h2>
          </Typography>
        </Box>
        <Hidden smDown>
          <Box>
            <Notification />
            <Messages />
            <Profile />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton  onClick={handleDrawerToggle}>
            <MenuRoundedIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
