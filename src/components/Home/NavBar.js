import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logo from './logo.png';

import './Home.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    about: {
        marginRight: theme.spacing(2),
        textDecoration: 'none',
    },
    navbar: {
        height: '147px',
        width: '100%',
    },
    title: {
        flexGrow: 1,
        fontSize: '36px',
        color: 'black',
        fontWeight: 400,
        fontFamily: 'Pathway Gothic One',
        paddingLeft: '1em',
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'black',
    },
    aboutText: {
        fontSize: '36px',
        color: 'black',
        fontWeight: 400,
        fontFamily: 'Pathway Gothic One',
        textDecoration: 'none',
        paddingRight: '1em',
    },
}));

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                style={{ backgroundColor: ' rgba(218, 160, 160, 0.46)' }}
            >
                <Toolbar className={classes.navbar}>
                    <Link to="/">
                        <img src={logo} className={classes.logo} alt="logo" />
                    </Link>
                    <div className={classes.title}>
                        <Link to="/" className={classes.linkStyle}>
                            <span>tcbakery</span>
                        </Link>
                    </div>
                    <Link to="/about-us" className={classes.about}>
                        <Typography className={classes.aboutText}>
                            About
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
