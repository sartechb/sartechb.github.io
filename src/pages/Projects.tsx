import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import React from 'react';

const useStyles = makeStyles(() =>
    createStyles({
        paddingBottom: {
            paddingBottom: '1rem',
        },
    })
);

interface Link {
    title: string;
    href: string;
}

interface Project {
    title: string;
    description: string;
    links: Link[];
}

const projects: Project[] = [
    {
        title: 'Personal Site',
        description:
            'This site! Uses React with Material UI in TypeScript. Uses a TravisCI pipeline to build and is deployed to GitHub Pages.',
        links: [
            {
                title: 'Source',
                href: '#',
            },
        ],
    },
    {
        title: '(Old) Personal Site',
        description:
            'My old personal website hosted on Github Pages. Designed from scratch using MaterializeCss.',
        links: [
            {
                title: 'Source',
                href: 'https://github.com/sartechb/sartechb.github.io',
            },
        ],
    },
    {
        title: 'Check.ai',
        description:
            'A web app created to save time and find the most relevant jobs based on the inputed preferences. Designed and developed the front end of the site.',
        links: [
            {
                title: 'Source',
                href: 'https://github.com/preetsmohan/check-ai',
            },
        ],
    },
    {
        title: 'Wobetto',
        description:
            'Created a startup initiative focused on developing a tool to help students connect with each other. The tool was built for the web using the now defunct Facebook Parse library.',
        links: [
            {
                title: 'Source',
                href: 'https://github.com/sartechb/Wobetto',
            },
        ],
    },
];

export const Projects: React.FC = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Projects
                    </Typography>
                </Grid>
                <Grid container spacing={2}>
                    {projects.map(project => (
                        <Grid item xs={4} key={project.title}>
                            <Card>
                                <CardContent>
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        align="left"
                                        className={classes.paddingBottom}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography align="left" variant="body2">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {project.links.map(link => (
                                        <Button
                                            size="small"
                                            color="secondary"
                                            href={link.href}
                                            key={link.href}
                                        >
                                            {link.title}
                                        </Button>
                                    ))}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </React.Fragment>
    );
};
