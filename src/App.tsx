import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import MainAppBar from "./components/AppBar";
import About from "./pages/About";
import Home from "./pages/Home";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
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

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <div className={classes.root}>
          <MainAppBar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
