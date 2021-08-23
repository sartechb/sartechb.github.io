import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import React from 'react';
import ReactGA from 'react-ga';

const styles = createStyles({
    avatar: {
        height: 256,
        margin: 10,
        marginBottom: 50,
        width: 256,
    },
});

const descriptions = [
    'a product manager',
    'a web developer',
    'a New Yorker',
    'a fan of the 80s',
    'a PC gamer',
    'an amateur photographer',
    'a cooking enthusiast',
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
            descriptionIndex: 0,
        };
    }

    public componentDidMount() {
        this.descriptionInterval = setInterval(() => {
            if (this.state.counter === descriptions.length) {
                this.setState({ counter: 0 });
            }
            this.setState((prevState) => ({
                counter: prevState.counter + 1,
                descriptionIndex: prevState.counter % descriptions.length,
            }));
        }, 3000);
    }

    public componentWillUnmount() {
        clearInterval(this.descriptionInterval);
    }

    public handleClick() {
        ReactGA.event({
            category: 'Home',
            action: 'Downloaded resume',
        });
    }

    public render() {
        const { classes } = this.props;
        const { descriptionIndex } = this.state;
        ReactGA.pageview(window.location.pathname + window.location.search);

        return (
            <React.Fragment>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    direction="column"
                >
                    <Grid item xs={12}>
                        <Avatar
                            alt="Sarthak Bhandari"
                            src={process.env.PUBLIC_URL + '/avatar.jpg'}
                            className={classes.avatar}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3" component="h1" gutterBottom>
                            Hello, Sarthak here. I&apos;m{' '}
                            {descriptions[descriptionIndex]}.
                        </Typography>
                    </Grid>
                    <br />
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            href={
                                process.env.PUBLIC_URL +
                                '/Bhandari_Sarthak_Resume_Web.pdf'
                            }
                            target="_blank"
                            onClick={this.handleClick}
                        >
                            Download Resume
                        </Button>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Home);
