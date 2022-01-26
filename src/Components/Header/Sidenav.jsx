import { Drawer, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyle";
import SidenavData from "./SidenavData";

export default function Sidenav({
  mobileOpen,
  handleDrawerClose,
  handleDrawerToggle,
}) {
  const classes = useStyles();

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <SidenavData handleDrawerClose={handleDrawerClose} />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css"></Hidden>
    </nav>
  );
}
