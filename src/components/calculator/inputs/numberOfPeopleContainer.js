import React from "react";
import classes from "./numberOfPeopleContainer.module.css";
import LabelPeople from "./labelPeople";

const numberOfPeopleContainer = (props) => {

    return (
        <div className={classes.container}>
            <LabelPeople people={props.people}/>
            <input 
                className={`${classes.input} ${(props.people === 0) ? classes.inputError : ''}`} 
                type="Text" id="peopleInput" 
                name="peopleInput" 
                value={props.people} 
                onChange={props.onChangePeople} 
            />
        </div>
    );

}

export default numberOfPeopleContainer;