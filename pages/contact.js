import React from "react";

import {Grid} from "@material-ui/core";

import MainContainerLayout from "layouts/MainContainerLayout";
import ParallaxLayout from "layouts/ParallaxLayout";

import OpeningHours from "pages-sections/contact-page/OpeningHours";
import Address from "pages-sections/contact-page/Address";
import Contact from "pages-sections/contact-page/Contact";

import ContactData from "assets/data/pages/contact";
import HeaderFooterLayout from "../layouts/HeaderFooterLayout";

export default function ContactPage(props) {
    return (
        <HeaderFooterLayout>
            <ParallaxLayout parallaxImage={ContactData.core.parallaxImage} parallaxHeader={ContactData.core.parallaxHeader}>
                <MainContainerLayout>
                    <Grid
                        container
                        direction={"row"}
                        justify={"center"}
                        alignContent={"center"}
                    >
                        <Grid item sm={12} md={4}>
                            <OpeningHours />
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <Address />
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <Contact />
                        </Grid>
                    </Grid>
                </MainContainerLayout>
            </ParallaxLayout>
        </HeaderFooterLayout>
    )
}
