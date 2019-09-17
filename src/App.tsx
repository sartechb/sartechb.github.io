import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/styles'
import './App.css'
import MainAppBar from './components/AppBar'
import About from './pages/About'
import Home from './pages/Home'

const mainTheme = createMuiTheme({
    palette: {
        primary: {
            contrastText: '#fff',
            dark: '#004b8c',
            light: '#59a4f0',
            main: '#0476bd',
        },
        secondary: {
            contrastText: '#fff',
            dark: '#861a00',
            light: '#f67a38',
            main: '#bd4b04',
        },
    },
})
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        root: {
            display: 'flex',
        },
        toolbar: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
    })
)

const App: React.FC = () => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={mainTheme}>
            <Router>
                <div className="App">
                    <div className={classes.root}>
                        <MainAppBar />
                        <main className={classes.content}>
                            <div className={classes.toolbar} />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/about" component={About} />
                            </Switch>
                        </main>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    )
}

export default App
