import {
    AppBar,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from '@material-ui/core';
import {
    createStyles,
    makeStyles,
    Theme,
    useTheme,
} from '@material-ui/core/styles';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import {
    Assignment,
    ChevronLeft,
    ChevronRight,
    Code,
    Home,
    Menu,
    Person,
    School,
    Work,
} from '@material-ui/icons';
import clsx from 'clsx';
import React, { ComponentType } from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';

interface MenuItem {
    Icon: ComponentType<SvgIconProps>;
    displayText: string;
    key: string;
    link: string;
}

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            transition: theme.transitions.create(['width', 'margin'], {
                duration: theme.transitions.duration.leavingScreen,
                easing: theme.transitions.easing.sharp,
            }),
            zIndex: theme.zIndex.drawer + 1,
        },
        appBarShift: {
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['width', 'margin'], {
                duration: theme.transitions.duration.enteringScreen,
                easing: theme.transitions.easing.sharp,
            }),
            width: `calc(100% - ${drawerWidth}px)`,
        },
        drawer: {
            flexShrink: 0,
            whiteSpace: 'nowrap',
            width: drawerWidth,
        },
        drawerClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                duration: theme.transitions.duration.leavingScreen,
                easing: theme.transitions.easing.sharp,
            }),
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        drawerOpen: {
            transition: theme.transitions.create('width', {
                duration: theme.transitions.duration.enteringScreen,
                easing: theme.transitions.easing.sharp,
            }),
            width: drawerWidth,
        },
        hide: {
            display: 'none',
        },
        menuButton: {
            marginRight: 36,
        },
        toolbar: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
    })
);

const menuItems: MenuItem[] = [
    {
        Icon: Home,
        displayText: 'Home',
        key: 'home',
        link: '/',
    },
    {
        Icon: Person,
        displayText: 'About',
        key: 'about',
        link: '/about',
    },
    {
        Icon: Code,
        displayText: 'Skills',
        key: 'skills',
        link: '/skills',
    },
    {
        Icon: Work,
        displayText: 'Experience',
        key: 'experience',
        link: '/experience',
    },
    {
        Icon: School,
        displayText: 'Education',
        key: 'education',
        link: '/education',
    },
    {
        Icon: Assignment,
        displayText: 'Projects',
        key: 'projects',
        link: '/projects',
    },
];

const MainAppBar: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        ReactGA.event({
            category: 'Navigation',
            action: 'Toggled drawer open',
        });
    };

    const handleDrawerClose = () => {
        setOpen(false);
        ReactGA.event({
            category: 'Navigation',
            action: 'Toggled drawer close',
        });
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Sarthak Bhandari
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? (
                            <ChevronRight />
                        ) : (
                            <ChevronLeft />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {menuItems.map(menuItem => (
                        <ListItem
                            button
                            key={menuItem.key}
                            component={Link}
                            to={menuItem.link}
                            onClick={() =>
                                ReactGA.event({
                                    category: 'Navigation',
                                    action: `clicked ${menuItem.displayText}`,
                                })
                            }
                        >
                            <ListItemIcon>
                                <menuItem.Icon />
                            </ListItemIcon>
                            <ListItemText primary={menuItem.displayText} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </React.Fragment>
    );
};

export default MainAppBar;
