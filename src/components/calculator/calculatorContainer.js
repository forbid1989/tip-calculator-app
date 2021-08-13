import React from "react";
import classes from "./calculatorContainer.module.css";

const calculatorContainer = (props) => {

    return (
        <div className={classes.container}>
            {props.children}
        </div>
    );

}

export default calculatorContainer;