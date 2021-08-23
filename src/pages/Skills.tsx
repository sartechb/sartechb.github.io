import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ReactGA from 'react-ga';

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            paddingBottom: '1rem',
        },
    })
);

interface Skill {
    area: string;
    experienceWith: string[];
    knowledgeable: string[];
    proficient: string[];
}

const skillList: Skill[] = [
    {
        area: 'Front-End',
        experienceWith: ['Sass', 'Babel', 'Webpack'],
        knowledgeable: ['TypeScript', 'CSS', 'AngularJS', 'Redux'],
        proficient: ['React', 'JavaScript/ES6', 'HTML'],
    },
    {
        area: 'Back-End',
        experienceWith: ['Java', 'Python (Flask, SciKit, NumPy)'],
        knowledgeable: ['SQL'],
        proficient: ['Node/Express'],
    },
    {
        area: 'Testing & CI/CD',
        experienceWith: ['Karma', 'Mocha', 'Cypress'],
        knowledgeable: ['TravisCI', 'Wiremock', 'Webdriver', 'Selenium'],
        proficient: ['Jenkins', 'Jest', 'Enzyme'],
    },
    {
        area: 'Other',
        experienceWith: ['Spanish', 'Hindi', 'Adobe Photoshop'],
        knowledgeable: ['Windows', 'Linux', 'Microsoft Suite'],
        proficient: ['English', 'MacOS', 'Agile', 'Scrum'],
    },
];

export const Skills: React.FC = () => {
    const classes = useStyles();
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Skills
                    </Typography>
                </Grid>
                <Grid container spacing={2}>
                    {skillList.map((skill) => (
                        <Grid item xs={12} lg={3} key={skill.area}>
                            <Card>
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        align="left"
                                        className={classes.title}
                                    >
                                        {skill.area}
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        align="left"
                                    >
                                        Proficient
                                    </Typography>
                                    <Typography align="left">
                                        {skill.proficient.join(', ')}
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        align="left"
                                    >
                                        Knowledgeable
                                    </Typography>
                                    <Typography align="left">
                                        {skill.knowledgeable.join(', ')}
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        align="left"
                                    >
                                        Experience With
                                    </Typography>
                                    <Typography align="left">
                                        {skill.experienceWith.join(', ')}
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
