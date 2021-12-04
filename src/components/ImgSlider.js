import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import slideImage1 from '../images/sliderImages/redNotice.jpg';
import slideImage2 from '../images/sliderImages/slider-scale.jpg';
import slideImage3 from '../images/sliderImages/black_widow.jpg';
import slideImage4 from '../images/sliderImages/slider-badag.jpg';
import slideImage5 from '../images/sliderImages/slider-badging.jpg';


const useStyles = makeStyles((theme) => ({

   
    root: {
        borderRadius: 30,
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),
        maxWidth: '100%',
    }
}
)
);

const ImageSlider = (props) => {
    const classes = useStyles();
    return (
        <Container boxShadow={2} className={classes.root} >
            <Carousel showStatus={false} dynamicHeight={true} infiniteLoop={true} autoFocus={false} showArrows={true} showThumbs={false} swipeable={true} autoPlay >
                <Link to="home">
                    <div>
                        <img src={slideImage1} />
                    </div>
                </Link>
                <div>
                    <img src={slideImage2} />
                </div>

                <div>
                    <img src={slideImage3} />                
                </div>

                <div>
                    <img src={slideImage4} />
                </div>

                <div>
                    <img src={slideImage5} />
                </div>

            </Carousel>
        </Container>

    );
}

export default ImageSlider;