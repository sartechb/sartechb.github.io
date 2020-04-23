import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ReactGA from 'react-ga';

const useStyles = makeStyles(() =>
    createStyles({
        paddingBottom: {
            paddingBottom: '1rem',
        },
    })
);

interface Duration {
    start: string;
    end: string;
}

interface Location {
    city: string;
    state: string;
}

interface Work {
    school: string;
    degree: string;
    location: Location;
    duration: Duration;
    description: string;
}

const university: Work = {
    school: 'University of Michigan',
    degree: 'Bachelors of Engineering',
    location: {
        city: 'Ann Arbor',
        state: 'Michigan',
    },
    duration: {
        start: "September '13",
        end: "May '17",
    },
    description:
        'Graduated Cum Laude. Took a variety of classes including machine learning, operating systems and distributed systems. Minored in entrepreneurship. I sometimes awkwardly say "Go Blue!" to people wearing Michigan gear when I see them.',
};

export const Education: React.FC = () => {
    const classes = useStyles();
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Education
                    </Typography>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    align="left"
                                    className={classes.paddingBottom}
                                >
                                    {university.school}
                                </Typography>
                                <Typography
                                    align="left"
                                    variant="subtitle1"
                                    component="p"
                                >
                                    {university.degree}
                                </Typography>
                                <Typography
                                    align="left"
                                    variant="subtitle2"
                                    component="p"
                                >
                                    {university.duration.start} -{' '}
                                    {university.duration.end}
                                </Typography>
                                <Typography
                                    align="left"
                                    variant="subtitle2"
                                    component="p"
                                    className={classes.paddingBottom}
                                >
                                    {university.location.city},{' '}
                                    {university.location.state}
                                </Typography>
                                <Typography align="left" variant="body2">
                                    {university.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
