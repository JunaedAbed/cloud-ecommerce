import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/sweets-cloud.png";
import useStyles from "./styles";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = ({ totalItems, props }) => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          className={classes.appBar}
          color="inherit"
          elevation={0}
        >
          <Toolbar>
            <Typography variant="h5" className={classes.title} color="inherit">
              <img
                src={logo}
                alt="sweets cloud"
                height="35px"
                className={classes.image}
              />{" "}
              Sweets Cloud
            </Typography>

            <div className={classes.grow} />

            <div className={classes.button}>
              <IconButton aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Navbar;
