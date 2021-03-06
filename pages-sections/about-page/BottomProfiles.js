import React from "react";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import EmployeeProfileCard from "components/Card/EmployeeProfileCard";

import {bodyHeaderText} from "assets/jss/coreStyles";
import AboutData from "assets/data/pages/about";
import URL from "../../assets/strings/urls";

const useStyles = makeStyles({
    greenHeaderText: {
        ...bodyHeaderText,
        marginTop: "-2vh",
    },
});

export default function BottomProfiles(props) {
    const classes = useStyles();

    return(
        <Grid
            container
            direction={"row"}
            justify={"center"}
            alignContent={"center"}
        >
            <Grid item md={12}>
                <h2 className={classes.greenHeaderText}>
                    {AboutData.employee.header}
                </h2>
            </Grid>
            <Grid item>
                <Grid
                    container
                    justify={"center"}
                    alignContent={"center"}
                >
                    {
                        AboutData.employee.employees.map((element, key) => {
                            return (
                                <Grid item sm={7} md={7} lg={4} key={key}>
                                    <EmployeeProfileCard employee={element}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}
