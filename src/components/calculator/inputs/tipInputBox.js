import React from "react";
import classes from "./tipInputBox.module.css";

const tipInputBox = (props) => {

    const {tip, onChangeTipKeyPress} = props

    return (
        <input type="number" className={classes.input} type="Text" id="tipInput" name="tipInput" placeholder="Custom" value={tip} onChange={onChangeTipKeyPress}/>
    );

}

export default tipInputBox;