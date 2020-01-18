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
    experienceWith: string[];
    knowledgeable: string[];
    proficient: string[];
}

const skillList: Skill[] = [
    {
        area: 'Front-End',
        experienceWith: ['Sass', 'Babel', 'Webpack'],
        knowledgeable: ['TypeScript', 'Express', 'CSS', 'AngularJS', 'Redux'],
        proficient: ['React', 'JavaScript/ES6', 'HTML'],
    },
    {
        area: 'Back-End',
        experienceWith: ['Java', 'Python (Flask, SciKit, NumPy)'],
        knowledgeable: ['SQL'],
        proficient: ['Node'],
    },
    {
        area: 'Testing & CI/CD',
        experienceWith: ['Karma', 'Mocha', 'Cypress'],
        knowledgeable: ['TravisCI', 'Wiremock'],
        proficient: ['Jenkins', 'Jest', 'Enzyme'],
    },
    {
        area: 'Miscellaneous',
        experienceWith: ['Spanish', 'Hindi', 'Adobe Photoshop'],
        knowledgeable: ['Windows', 'Linux', 'Microsoft Suite'],
        proficient: ['English', 'MacOS'],
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
