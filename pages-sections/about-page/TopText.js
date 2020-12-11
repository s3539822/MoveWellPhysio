import React from "react";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {bodyParaText} from "assets/jss/coreStyles";
import AboutData from "assets/data/pages/about";

const useStyles = makeStyles({
    gridSpacing: {
        marginTop: "-5px",
        marginBottom: "-5px"
    },
    bodyParaText: {
        ...bodyParaText,
        marginLeft: "4vw",
        marginRight: "4vw",
        textAlign: "left",
    },
});

export default function TopText(props) {
    const classes = useStyles();

    return(
        <Grid
            container
            direction={"row"}
            alignItems={"center"}
            justify={"center"}
        >
            {AboutData.top.map(element => {
                return (
                    <Grid item sm={12} md={12} className={classes.gridSpacing} key={element}>
                        <h4 className={classes.bodyParaText}>
                            {element}
                        </h4>
                    </Grid>
                )
            })}
        </Grid>
    )
}
