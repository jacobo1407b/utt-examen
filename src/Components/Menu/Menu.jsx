import React from "react";
import firebase from "../../utils/firebase";
import "firebase/auth";
import { withRouter } from "react-router-dom";
import Exit from "../Modal/ModalBasic";
import NotRes from "../Modal/NoResponsive";
import Reloj from "../Reloj/RelojLimit";

import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const MenuApp = (props) => {
  const { cerrar, examen } = props;
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const logout = () => {
    firebase.auth().signOut();
    props.history.push("/");
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {cerrar ? (
        <MenuItem onClick={logout}>
          <IconButton aria-label="Exit app" color="inherit">
            <ExitToAppIcon />
          </IconButton>
          <p>Cerrar sesión</p>
        </MenuItem>
      ) : (
        <NotRes exitExam={null} examen={examen} />
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {cerrar ? (
            "SEANI"
          ) : (
            <Typography variant="h6" noWrap>
              <Reloj />
            </Typography>
          )}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {cerrar ? (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={logout}
                color="inherit"
              >
                <ExitToAppIcon />
                Salir
              </IconButton>
            ) : (
              <Exit exitExam={null} examen={examen} />
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default withRouter(MenuApp);

/**
 *
 * {cerrar ? (<li><a onClick={logout}>Cerrar</a></li>) : null}
 * 
 * 
 * <div>
      <nav>
        <div className="nav-wrapper  green darken-3">
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          {cerrar ? null : <Reloj />}
          <ul className="right hide-on-med-and-down">
            <li>
              {cerrar ? (
                <a
                  href="#!"
                  className="btn-floating btn-large halfway-fab waves-effect waves-light red"
                  onClick={logout}
                  title="cerrar sesión"
                >
                  <i className="material-icons">exit_to_app</i>
                </a>
              ) : (
                <NotRes exitExam={null} examen={examen} />
              )}
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          {cerrar ? (
            <a href="#!" onClick={logout}>
              <i className="material-icons">exit_to_app</i>Cerrar sesion
            </a>
          ) : (
            <Exit exitExam={null} examen={examen} />
          )}
        </li>
      </ul>
    </div>
 */
