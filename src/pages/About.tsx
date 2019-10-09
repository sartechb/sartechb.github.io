import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(3, 2),
        },
        root2: {
            marginBottom: '1rem',
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
        {
            key: 'contact',
            value:
                "You can find my contact info below. Feel free to reach me any way you're comfortable! That being said the best way to reach out to me would be through email.",
        },
    ];
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        About Me
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.root} square>
                        {sections.map((section, index, arr) => (
                            <React.Fragment key={section.key}>
                                <Typography paragraph align="left">
                                    {section.value}
                                </Typography>
                                {arr.length - 1 === index ? null : (
                                    <Divider
                                        variant="middle"
                                        className={classes.root2}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default About;
