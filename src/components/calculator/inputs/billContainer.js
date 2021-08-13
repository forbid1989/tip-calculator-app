import React from "react";
import classes from "./billContainer.module.css";

const billContainer = (props) => {

    return (
        <div className={classes.container}>
            <label for="billInput" className={classes.bill}>Bill</label>
            <input className={classes.input} type="Text" id="billInput" name="billInput" value={props.bill} onChange={props.onChangeBill}/>
        </div>
    );

}

export default billContainer;