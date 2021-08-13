import React from "react";
import classes from "./outputResults.module.css";

const outputResults = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.labelBox}>
                <p className={classes.label}>{props.title}</p>
                <p className={classes.perPerson}>/ person</p>
            </div>
            <div className={classes.amount}>
                <h1>{props.amount}</h1>
            </div>
        </div>
    );

}

export default outputResults;