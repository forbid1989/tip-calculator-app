import React from "react";
import classes from "./calculatorOutput.module.css";
import OutputResults from "./outputResults";
import ResetButton from "./resetButton";

const calculatorOutput = (props) => {

    return (
        <div className={classes.container}>
            <OutputResults title={"Tip Amount"} amount={props.totalTip} />
            <OutputResults title={"Total"} amount={props.total} />
            <ResetButton reset={props.reset} resetDisabled={props.resetDisabled} />
        </div>
    );

}

export default calculatorOutput;