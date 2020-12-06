import React from "react";
import Carousel from "react-slick";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import LandingData from "../../assets/data/pages/landing-data";

import carouselStyle from "./landingPageCarouselStyle";
const useStyles = makeStyles(carouselStyle);

export default function LandingPageCarousel(props) {
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    function Slide(image, header, body, buttonText) {
        return (
            <div className={classes.imageTint} key={header}>
                <div style={{backgroundImage: "url(" + image + ")"}} className={classes.imageStyle}/>
                <Grid
                    container
                    direction={"column"}
                    justify={"center"}
                    alignItems={"center"}
                    className={classes.imageText}
                >
                    <Grid item>
                        <h1 className={classes.title}>
                            {header}
                        </h1>
                    </Grid>
                    <Grid item>
                        <hr size={30} className={classes.greenHr}/>
                    </Grid>
                    {body !== 0 ?
                        <Grid item>
                            <h4 className={classes.titleSubHeading}>
                                {body}
                            </h4>
                        </Grid>
                        :
                        null
                    }
                    <Grid item>
                        <Button className={classes.button}>
                            <p>
                                <b>{buttonText}</b>
                            </p>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }

    return (
        <Carousel {...settings}>
            {LandingData.carousel.map(elements => {
                return(
                    Slide(elements[0], elements[1], elements[2], elements[3])
                )
            })}
        </Carousel>
    )
}
