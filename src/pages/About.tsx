import {
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Grid,
    Paper,
    Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import ReactGA from 'react-ga';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            margin: '1rem 0',
            maxWidth: '20rem',
            width: '100%',
        },
        divider: {
            marginBottom: '1rem',
        },
        paperBackground: {
            padding: theme.spacing(3, 2),
        },
    })
);

const About: React.FC = () => {
    const classes = useStyles();
    const sections = [
        {
            key: 'about',
            value:
                "Hey! I'm Sarthak, a midwest boy in the big city. Currently I live in NYC, spending my days roaming around the city. I enjoy science fiction movies, electronic music, the rad themes of the 80s, and terrible jokes. I graduated from the University of Michigan in 2017 with a degree in Computer Science (Go Blue!).",
        },
        {
            key: 'work',
            value:
                "Currently I'm working as a web developer at American Express. In the past I've worked on Android mobile apps and dabbled in machine learning, databases and computer security. My passion lies in human/computer interaction and good design.",
        },
    ];
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        About Me
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paperBackground} square>
                        {sections.map((section, index, arr) => (
                            <React.Fragment key={section.key}>
                                <Typography paragraph align="left">
                                    {section.value}
                                </Typography>
                                {arr.length - 1 === index ? null : (
                                    <Divider
                                        variant="middle"
                                        className={classes.divider}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardContent>Reach out to me!</CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                href="https://github.com/sartechb"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </Button>
                            <Button
                                size="small"
                                href="https://twitter.com/sartechb"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Twitter
                            </Button>
                            <Button
                                size="small"
                                href="https://www.linkedin.com/in/sarthakbhandari/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </Button>
                            <Button
                                size="small"
                                href="mailto:hello@sarthakb.com"
                                rel="noopener noreferrer"
                            >
                                Email
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default About;
