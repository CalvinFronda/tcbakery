import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from './ImageContainer';

import axios from 'axios';
import './Home.css';

const useStyles = makeStyles((theme) => ({
    image: {
        minWidth: '300px',
        height: '300px',
    },
    mainContent: {
        paddingTop: '2em',
        paddingLeft: '5em',
        [theme.breakpoints.down('md')]: {
            paddingLeft: '0',
        },
    },
    filterContainer: {
        width: '90%',
        paddingBottom: '1em',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        },
    },
    filter: {
        width: '130px',
        height: '40px',
        borderRadius: '15px;',
    },
}));

const Home = () => {
    const classes = useStyles();
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(false);

    const strapi = 'https://tcbakery.herokuapp.com';

    const getData = async () => {
        try {
            const res = await axios.get(`${strapi}/foods`);
            const foodData = res.data;

            setContent(foodData);
            setLoading(true);
        } catch (err) {
            const response = err.response;
            console.error(response.data.errors);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    // Will see if this feature is needed
    // const handleFilterChange = async (event) => {
    //     setFilterSelect(event.target.value);
    //     try {
    //         if (event.target.value > 0) {
    //             const res = await axios.get(
    //                 `${strapi}/categories/${event.target.value}`
    //             );
    //             const filteredData = res.data.foods;
    //             setContent(filteredData);
    //         } else {
    //             getData();
    //         }
    //     } catch (err) {
    //         const response = err.response;
    //         console.error(response.data.errors);
    //     }
    // };

    return (
        <div>
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                className={classes.mainContent}
            >
                {/* Filter select - no need for now  
                
                <Grid
                    container
                    justify="flex-end"
                    className={classes.filterContainer}
                >
                    <FormControl>
                        <Select
                            variant="outlined"
                            className={classes.filter}
                            value={filterSelect}
                            onChange={handleFilterChange}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value={0}>
                                <em>All</em>
                            </MenuItem>
                            {filterCategories.map((category) => (
                                <MenuItem key={category.id} value={category.id}>
                                    <em>{category.name}</em>
             <div class="square-container">
  <div class="square">
    <div class="content"></div>
  </div>
  <div class="square">
    <div class="content spread"></div>
  </div>
  <div class="square">
    <div class="content column"></div>
  </div>
</div>                   </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid> */}
                <div className="responsive-wrapper">
                    <div className="responsive-grid">
                        {!loading ? (
                            <div> Loading </div>
                        ) : (
                            content.map((data) => (
                                <ImageContainer
                                    key={data.id}
                                    name={data.name}
                                    image={data.image[0].url}
                                    id={data.id}
                                    description={data.description}
                                    recipe={data.recipe}
                                />
                            ))
                        )}
                    </div>
                </div>
            </Grid>
        </div>
    );
};

export default Home;
