import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import aboutUsImage from './aboutUsImage.jpeg';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '4em',
    },
    aboutUsText: {
        paddingBottom: '1em',
        fontSize: '67px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px',
        },
    },
    image: {
        position: 'relative',
        maxWidth: '100%',
        height: 'auto',
    },
    mainContent: {
        paddingTop: '2em',
        paddingLeft: '5em',
    },
}));

const string = `Hello! 

Thank you for visiting our website! We are Tiffany and Calvin, and we created this page to share our baking journey! It all started in 2020 with the global pandemic closing down businesses and being unable to travel. We wanted to learn something new and discovered that we love baking! The first thing we got to bake together were brioche hamburger buns using Joshua Weissman’s recipe.
    `;

const AboutUs = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="flex-start">
                <Grid item xs={12}>
                    <Typography className={classes.aboutUsText}>
                        About Us
                    </Typography>
                </Grid>

                <Grid item md={6}>
                    <img
                        className={classes.image}
                        src={aboutUsImage}
                        alt="Picture of Calvin and Tiffany"
                    />
                </Grid>
                <Grid item md={6}>
                    <Grid
                        container
                        direction="column"
                        justify="space-around"
                        alignItems="center"
                    >
                        <Grid item md={9}>
                            <Typography
                                style={{ whiteSpace: 'pre-line' }}
                                variant="h6"
                            >
                                {string}
                            </Typography>
                        </Grid>
                        <Grid item md={9} style={{ paddingTop: '2em' }}>
                            <Typography variant="h6">
                                Located in the San Jose and Los Angeles area, we
                                are at the center of great food. The goal of
                                this page is to document our skills as bakers
                                and photographers. Food pictures trigger our
                                dopamine signals and we wanted to share our
                                creations with others
                            </Typography>
                        </Grid>
                        <Grid item md={9} style={{ paddingTop: '2em' }}>
                            <Typography variant="h6">
                                We take lots of inspiration from Youtube and
                                Netflix, and are always checking if we have the
                                ingredients in the pantry. Our favorite show
                                right now would be Nailed it! A show where they
                                have amature bakers battle it out for 10,000
                                dollars!
                            </Typography>
                        </Grid>
                        <Grid item md={9} style={{ paddingTop: '2em' }}>
                            <Typography variant="h6">
                                If you have any questions please send us a DM on
                                instagram @tcbakery_
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default AboutUs;
