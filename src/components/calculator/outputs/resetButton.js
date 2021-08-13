import React from "react";
import classes from "./resetButton.module.css";

const resetButton = (props) => {

    return (
        <button type="button" disabled={props.resetDisabled} className={classes.button} onClick={() => props.reset()}>Reset</button>
    );

}

export default resetButton;