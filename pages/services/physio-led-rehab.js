import React from "react";

import ParallaxLayout from "../../components/Layout/ParallaxLayout";
import ParallaxImage from "../../assets/img/physio/sign.jpg";

export default function PhysioLesdRehab(props) {

    const parallaxHeader = "Physio-led Rehab"
    const parallaxBody = "Coming soon"

    return (
        <ParallaxLayout parallaxImage={ParallaxImage} parallaxHeader={parallaxHeader} parallaxBody={parallaxBody}>
        </ParallaxLayout>
    )
}
