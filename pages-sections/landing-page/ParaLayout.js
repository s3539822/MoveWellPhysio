import React from "react";
import Link from "next/link";
import classNames from "classnames";
import Slide from "react-reveal/Slide";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import {bodyActionText, bodyHeaderText, bodyParaText1} from "assets/jss/coreStyles";
import {blackColor, hexToRgb} from "assets/jss/nextjs-material-kit-pro";
import Colours from "../../assets/strings/colours";
import useIsTouchDevice from "../../util/device-detect";

const useStyles = makeStyles({
    title: {
        textAlign: "center"
    },
    bodyHeaderText: {
        ...bodyHeaderText,
        textAlign: "left",
    },
    bodyParaText: {
        ...bodyParaText1,
        marginLeft: "2px",
    },
    bodyActionText: {
        ...bodyActionText
    },
    inlineBlock: {
        display: "inline-block"
    },
    arrow: {
        marginBottom: "-6px",
        color: Colours.green,
    },
    image: {
        width: "100%",
        height: "60vh",
        maxHeight: "1600px",
        position: "relative",
        marginRight: "-40vw",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(" +
            hexToRgb(blackColor) +
            ", 0.14), 0 6px 30px 5px rgba(" +
            hexToRgb(blackColor) +
            ", 0.12), 0 8px 10px -5px rgba(" +
            hexToRgb(blackColor) +
            ", 0.2)",
    },
    pad: {
        padding: "2vw",
    },
});

export default function ParaLayout(props) {
    const classes = useStyles();
    const {image, headerString, bodyStringArray, actionString, actionUrl, imageLeft} = props
    const padding = imageLeft ? classes.leftPad : classes.rightPad

    const TextBlock  = ({imageLeft}) => {
        const animation = (useIsTouchDevice() || !imageLeft)

        return (
            <Slide left={animation} cascade={animation}>
                <div>
                    <h2 className={classes.bodyHeaderText}>
                        {headerString}
                    </h2>
                </div>
                <div>
                    {
                        bodyStringArray.map((bodyString, key) => {
                            return (
                                <h4 className={classes.bodyParaText} key={key}>
                                    {bodyString}
                                </h4>
                            )
                        })
                    }
                </div>
                <Grid
                    container
                    direction={"row"}
                    justify={"flex-start"}
                    alignItems={"center"}
                >
                    <Grid item>
                        <Link href={actionUrl}>
                            <a>
                                <h5 className={classNames(classes.bodyActionText, classes.inlineBlock)}>
                                    {actionString}
                                </h5>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href={actionUrl}>
                            <a>
                                <Icon className={classes.arrow}>
                                    <KeyboardArrowRightIcon />
                                </Icon>
                            </a>
                        </Link>
                    </Grid>
                </Grid>
            </Slide>
        )
    }

    const ImageBlock = () => {
        return (
            <div
                className={classNames(classes.image)}
                style={{
                    backgroundImage: "url(" + image + ")",
                }}
            />
        )
    }

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12} sm={12} md={6} className={classes.pad}>
                {
                    imageLeft === true ?
                        <ImageBlock /> :
                        <TextBlock imageLeft={imageLeft}/>
                }
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.pad}>
                {
                    imageLeft === false ?
                        <ImageBlock /> :
                        <TextBlock imageLeft={imageLeft}/>
                }
            </Grid>
        </Grid>
    )
}

ParaLayout.propTypes = {
    image: PropTypes.string,
    headerString: PropTypes.string,
    bodyStringArray: PropTypes.array,
    actionString: PropTypes.string,
    actionUrl: PropTypes.string,
    imageLeft: PropTypes.bool,
}
