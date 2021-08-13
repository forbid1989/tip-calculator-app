import React from "react";
import classes from "./tipInputBox.module.css";

const tipInputBox = (props) => {

    return (
        <input type="number" className={classes.input} type="Text" id="tipInput" name="tipInput" placeholder="Custom" value={props.tip} onChange={props.onChangeTipKeyPress}/>
    );

}

export default tipInputBox;