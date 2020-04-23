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
    company: string;
    title: string;
    location: Location;
    duration: Duration;
    description: string;
}

const experiences: Work[] = [
    {
        company: 'American Express',
        title: 'Software Engineer',
        location: {
            city: 'New York',
            state: 'New York',
        },
        duration: {
            start: "August '17",
            end: 'Present',
        },
        description:
            'Developing high volume, high impact production software in React and Node. Leading architecture discussions for new applications. Led automation efforts to provide end to end coverage over multiple applications. Migrated components from legacy Angular code to React.',
    },
    {
        company: 'American Express',
        title: 'Software Engineer Intern',
        location: {
            city: 'New York',
            state: 'New York',
        },
        duration: {
            start: "June '16",
            end: "August '16",
        },
        description:
            'Worked on building Amex Go, a production ready Android app. Utilized custom views, threads, ButterKnife, GSON, and an Orchestration Layer to pull in and display data.',
    },
    {
        company: 'AdAdapted',
        title: 'Software Engineer Intern',
        location: {
            city: 'Ann Arbor',
            state: 'Michigan',
        },
        duration: {
            start: "May '15",
            end: "August '15",
        },
        description:
            'Successfully helped launch the Android SDK by leading the design and development of four Android applications to test and debug AdAdapted’s platform.',
    },
    {
        company: 'Health Decisions',
        title: 'Software Engineer Intern',
        location: {
            city: 'Plymouth',
            state: 'Michigan',
        },
        duration: {
            start: "March '13",
            end: "June '13",
        },
        description:
            'Used Microsoft SQL Server to improve accessibility of available healthcare information allowing for a streamlined work experience. Calculated and analyzed costs of medical procedures.',
    },
];

export const Work: React.FC = () => {
    const classes = useStyles();
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Work Experience
                    </Typography>
                </Grid>
                <Grid container spacing={2}>
                    {experiences.map(experience => (
                        <Grid item xs={12} lg={6} key={experience.duration.end}>
                            <Card>
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        align="left"
                                        className={classes.paddingBottom}
                                    >
                                        {experience.company}
                                    </Typography>
                                    <Typography
                                        align="left"
                                        variant="subtitle1"
                                        component="p"
                                    >
                                        {experience.title}
                                    </Typography>
                                    <Typography
                                        align="left"
                                        variant="subtitle2"
                                        component="p"
                                    >
                                        {experience.duration.start} -{' '}
                                        {experience.duration.end}
                                    </Typography>
                                    <Typography
                                        align="left"
                                        variant="subtitle2"
                                        component="p"
                                        className={classes.paddingBottom}
                                    >
                                        {experience.location.city},{' '}
                                        {experience.location.state}
                                    </Typography>
                                    <Typography align="left" variant="body2">
                                        {experience.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
