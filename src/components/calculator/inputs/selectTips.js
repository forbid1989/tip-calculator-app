import React from "react";
import classes from "./selectTips.module.css";
import TipButton from "./tipButton";
import TipInputBox from "./tipInputBox";

const selectTips = (props) => {

    const tipValues = [5,10,15,25,50]

    return (
        <div className={classes.container}>
            <p for="billInput" className={classes.tipLabel}>Select Tip %</p>
            <div className={classes.box}>
                { 
                    tipValues.map((tipValue)=>{
                        return <TipButton key={tipValue} tipValue={tipValue} onChangeTip={props.onChangeTip}  />
                    }) 
                }
                <TipInputBox tip={props.tip} onChangeTipKeyPress={props.onChangeTipKeyPress} />
            </div>
        </div>
    );

}

export default selectTips;