import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import './Home.css';

const ImageContainer = ({ name, image, description, recipe, history }) => {
    const handleClick = () => {
        const link = name.toLowerCase().split(' ').join('');
        history.push(`/${link}`, {
            name,
            image,
            description,
            recipe,
        });
    };

    return (
        <div className="snip" onClick={handleClick}>
            <img className="gallery-item" src={image} />
            <div className="overlay">
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default withRouter(ImageContainer);
