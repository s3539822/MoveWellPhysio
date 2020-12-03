import {blackColor, grayColor, hexToRgb, whiteColor} from "../../assets/jss/nextjs-material-kit-pro";
import Colours from "../../assets/strings/colours";

const styles = theme => ({
    listItem: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "block",
        margin: "0",
        padding: "0",
        [theme.breakpoints.down("sm")]: {
            "& ul": {
                maxHeight: "300px",
                overflow: "scroll"
            },
            width: "100%",
            "&:not(:last-child)": {
                "&:after": {
                    content: '""',
                    display: "block",
                    height: "1px",
                    backgroundColor: grayColor[14]
                }
            }
        },
    },
    button: {
        color: whiteColor,
        backgroundColor: "transparent",
        minHeight: "auto",
        width: "fill",
        border: "none",
        borderRadius: "3px",
        position: "relative",
        padding: "12px 30px",
        margin: ".3125rem 1px",
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
            backgroundColor: Colours.green,
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
    underline: {
        borderBottom: "5px solid " + Colours.green,
    }
})

export default styles
