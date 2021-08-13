import React from "react";
import classes from "./calculatorInput.module.css";
import SelectTips from "./selectTips";
import NumberOfPeopleContainer from "./numberOfPeopleContainer";
import BillContainer from "./billContainer";

const calculatorInput = (props) => {

    return (
        <div className={classes.container}>
            <BillContainer bill={props.bill} onChangeBill={props.onChangeBill} />
            <SelectTips tip={props.tip} onChangeTip={props.onChangeTip} onChangeTipKeyPress={props.onChangeTipKeyPress} />
            <NumberOfPeopleContainer people={props.people} onChangePeople={props.onChangePeople} />
        </div>
    );

}

export default calculatorInput;