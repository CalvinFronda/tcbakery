import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        textAlign: 'center',
        padding: '5em 10em ',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '5em',
        },
        [theme.breakpoints.only('xs')]: {
            padding: '1em',
        },
    },

    title: {
        // fontSize: '40px',
        fontWeight: 800,
        paddingBottom: '2em',
        [theme.breakpoints.down('md')]: {
            paddingBottom: '0',
        },
        [theme.breakpoints.only('xs')]: {
            paddingBottom: '2em',
        },
    },
    recipe: {
        fontSize: '20px',
        paddingBottom: '4em',
    },
    description: {
        fontSize: '20px',
    },
    details: {
        height: '600px',
        textAlign: 'left',
    },
    image: {
        position: 'relative',
        maxWidth: '100%',
        height: 'auto',
    },
    contentBox: {
        width: '85%',
        textAlign: 'center',
    },
}));

const ProfilePage = ({
    location: {
        state: { description, name, image, recipe },
    },
}) => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <Grid container direction="row" justify="flex-start">
                <Hidden mdUp>
                    <Grid item xs={12}>
                        <Typography variant="h3" className={classes.title}>
                            {name}
                        </Typography>
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={6}>
                    <img className={classes.image} src={image} alt={name} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="center"
                        className={classes.details}
                    >
                        <Hidden only="xs">
                            <Grid item>
                                <Typography
                                    variant="h3"
                                    className={classes.title}
                                >
                                    {name}
                                </Typography>
                            </Grid>
                        </Hidden>
                        <div className={classes.contentBox}>
                            <Grid item xs={12}>
                                {recipe ? (
                                    <a
                                        href={recipe}
                                        target="_blank"
                                        style={{
                                            textDecoration: 'none',
                                            color: 'black',
                                        }}
                                    >
                                        <Typography className={classes.recipe}>
                                            Click here for the Recipe!
                                        </Typography>
                                    </a>
                                ) : (
                                    <Typography className={classes.recipe}>
                                        Recipe coming soon!
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item>
                                <Typography>{description}</Typography>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProfilePage;
