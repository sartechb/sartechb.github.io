import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { createStyles, withStyles, WithStyles } from "@material-ui/styles";

import React from "react";

const styles = createStyles({
  avatar: {
    height: 256,
    margin: 10,
    marginBottom: 50,
    width: 256
  }
});

const descriptions = [
  "web developer",
  "software engineer @ American Express",
  "New Yorker",
  "fan of the 80s"
];
interface HomeProps extends WithStyles<typeof styles> {
  prop: string;
}
interface HomeState {
  counter: number;
  descriptionIndex: number;
}
class Home extends React.Component<HomeProps, HomeState> {
  public descriptionInterval!: NodeJS.Timeout;
  public constructor(props: Readonly<HomeProps>) {
    super(props);
    this.state = {
      counter: 0,
      descriptionIndex: 0
    };
  }

  public componentDidMount() {
    this.descriptionInterval = setInterval(() => {
      if (this.state.counter === descriptions.length) {
        this.setState({ counter: 0 });
      }
      this.setState(prevState => ({
        counter: prevState.counter + 1,
        descriptionIndex: prevState.counter % 4
      }));
    }, 3000);
  }

  public componentWillUnmount() {
    clearInterval(this.descriptionInterval);
  }

  public render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container justify="center" alignItems="center">
          <Avatar
            alt="Sarthak Bhandari"
            src={process.env.PUBLIC_URL + "/avatar.jpg"}
            className={classes.avatar}
          />
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Typography variant="h3" component="h1" gutterBottom>
            Hello, Sarthak here. I'm a{" "}
            {descriptions[this.state.descriptionIndex]}.
          </Typography>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
