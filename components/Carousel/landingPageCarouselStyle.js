import {blackColor, grayColor, hexToRgb, title, whiteColor} from "../../assets/jss/nextjs-material-kit-pro";
import image1 from "../../assets/img/physio/layout_1.jpg";
import Colours from "../../assets/strings/colours";
import {greenHrThick} from "../../assets/jss/coreStyles";

const landingPageCarouselStyle = {
    filter: {},
    imageTint: {
        backgroundSize: "contain",
        "&:before": {
            background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''"
        }
    },
    imageText: {
        paddingBottom: "35px",
        position: "absolute",
        bottom: "25vh",
        left: "auto",
        right: "auto",
        zIndex: "10",
        color: "#ffffff",
        textAlign: "center",
        display: "block!important",
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: whiteColor,
        textDecoration: "none",
        textTransform: "uppercase",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        textSize: "calc(2vw * 2)",
    },
    button: {
        backgroundColor: Colours.green,
        minHeight: "auto",
        minWidth: "auto",
        color: whiteColor,
        border: "none",
        borderRadius: "3px",
        position: "relative",
        padding: "12px 30px",
        margin: ".7125rem 1px",
        marginTop: "25px",
        fontSize: "12px",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "0",
        willChange: "box-shadow, transform",
        transition:
            "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        lineHeight: "1.42857143",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: "pointer",
        "&:hover": {
            color: whiteColor,
            backgroundColor: grayColor[0],
            boxShadow:
                "0 14px 26px -12px rgba(" +
                hexToRgb(grayColor[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                hexToRgb(blackColor) +
                ", 0.12), 0 8px 10px -5px rgba(" +
                hexToRgb(grayColor[0]) +
                ", 0.2)"
        },
    },
    imageStyle: {
        backgroundImage: "url(" + image1 + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        height: "100vh",
        width: "auto",
        minWidth: "100%",
        display: "inherit",
        position: "relative",
        margin: "0",
        padding: "0",
        border: "0",
        alignItems: "center",
    },
    greenHr: {
        ...greenHrThick
    },
};

export default landingPageCarouselStyle;
