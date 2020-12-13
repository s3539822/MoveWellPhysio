import React from "react";

import {Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LandingPageCarousel from "components/Carousel/LandingPageCarousel";

import MainContainerLayout from "layouts/MainContainerLayout";

import IntroVideo from "pages-sections/landing-page/IntroVideo";
import ParaLayout from "pages-sections/landing-page/ParaLayout";

import {blackHrThin} from "assets/jss/coreStyles";
import LandingData from "assets/data/pages/landing-data";
import URL from "assets/strings/urls";
import ColumnLayout from "../layouts/ColumnLayout";
import HeaderFooterLayout from "../layouts/HeaderFooterLayout";

const useStyles = makeStyles({
    hr: {
        ...blackHrThin,
    },
});

export default function LandingPage(props) {
    const classes = useStyles();

    return (
        <HeaderFooterLayout>
            <LandingPageCarousel/>
            <MainContainerLayout>
                <ColumnLayout>
                    <Grid
                        container
                        direction={"row"}
                        alignContent={"center"}
                        justify={"center"}
                    >
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <ParaLayout actionUrl={URL.PHYSIOTHERAPY} image={LandingData.para1.image} headerString={LandingData.para1.header} bodyStringArray={LandingData.para1.body} actionString={LandingData.para1.action} actionUrl={URL.PHYSIOTHERAPY} imageLeft={false}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <hr size={30} className={classes.hr}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <IntroVideo />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <hr size={30} className={classes.hr}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <ParaLayout actionUrl={URL.ABOUT} image={LandingData.para2.image} headerString={LandingData.para2.header} bodyStringArray={LandingData.para2.body} actionString={LandingData.para2.action} actionUrl={URL.ABOUT} imageLeft={true}/>
                        </Grid>
                    </Grid>
                </ColumnLayout>
            </MainContainerLayout>
        </HeaderFooterLayout>
    )
}
