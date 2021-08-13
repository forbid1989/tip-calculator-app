import React from "react";
import classes from "./tipButton.module.css";

const tipButton = (props) => {

    return (
        <button className={classes.button} onClick={() => props.onChangeTip(props.tipValue) }>{props.tipValue}%</button>
    );

}

export default tipButton;