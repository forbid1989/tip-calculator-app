import React from "react";
import classes from "./labelPeople.module.css";

const labelPeople = (props) => {

    return (
        <div className={classes.box}>
            <label for="peopleInput" className={classes.peopleLabel}>Number of People</label>
            {
                (props.people === 0) ? <span className={classes.error}>Can't be zero</span> : ''
            }
            
        </div>
    );

}

export default labelPeople;