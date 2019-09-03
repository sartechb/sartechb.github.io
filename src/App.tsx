import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import Person from "@material-ui/icons/Person";
import clsx from "clsx";
import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "./App.css";
import About from "./pages/About";

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      transition: theme.transitions.create(["width", "margin"], {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
      zIndex: theme.zIndex.drawer + 1,
    },
    appBarShift: {
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["width", "margin"], {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: `calc(100% - ${drawerWidth}px)`,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    drawer: {
      flexShrink: 0,
      whiteSpace: "nowrap",
      width: drawerWidth,
    },
    drawerClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    drawerOpen: {
      transition: theme.transitions.create("width", {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: drawerWidth,
    },
    hide: {
      display: "none",
    },
    menuButton: {
      marginRight: 36,
    },
    root: {
      display: "flex",
    },
    toolbar: {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
  }),
);

const MainAppBar: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Sarthak Bhandari
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="about">
            <Link to="/about"><ListItemIcon><Person/></ListItemIcon></Link>
            <ListItemText primary="About" />
          </ListItem>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
      </Drawer>
      </React.Fragment>
  );
};

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <div className={classes.root}>
          <MainAppBar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route path="/about" component={About} />
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
