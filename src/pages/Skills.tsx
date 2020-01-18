import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            paddingBottom: '1rem',
        },
    })
);

interface Skill {
    area: string;
    proficient: string[];
    knowledgeable: string[];
    experienceWith: string[];
}

const skillList: Skill[] = [
    {
        area: 'Front-End',
        proficient: ['React', 'JavaScript/ES6', 'HTML'],
        knowledgeable: ['TypeScript', 'Express', 'CSS', 'AngularJS', 'Redux'],
        experienceWith: ['Sass', 'Babel', 'Webpack'],
    },
    {
        area: 'Back-End',
        proficient: ['Node'],
        knowledgeable: ['SQL'],
        experienceWith: ['Java', 'Python (Flask, SciKit, NumPy)'],
    },
    {
        area: 'Testing & CI/CD',
        proficient: ['Jenkins', 'Jest', 'Enzyme'],
        knowledgeable: ['TravisCI', 'Wiremock'],
        experienceWith: ['Karma', 'Mocha', 'Cypress'],
    },
    {
        area: 'Miscellaneous',
        proficient: ['English', 'MacOS'],
        knowledgeable: ['Windows', 'Linux', 'Microsoft Suite'],
        experienceWith: ['Spanish', 'Hindi', 'Adobe Photoshop'],
    },
];

export const Skills: React.FC = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Skills
                    </Typography>
                </Grid>
                <Grid container spacing={2}>
                    {skillList.map(skill => (
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
                                        {skill.proficient.toString()}
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        align="left"
                                    >
                                        Knowledgeable
                                    </Typography>
                                    <Typography align="left">
                                        {skill.knowledgeable.toString()}
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        align="left"
                                    >
                                        Experience With
                                    </Typography>
                                    <Typography align="left">
                                        {skill.experienceWith.toString()}
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
