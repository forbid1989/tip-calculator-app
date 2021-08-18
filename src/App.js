import React, { useState } from "react";
import classes from "./App.module.css";
import Splitter from "./components/logo"
import CalculatorContainer from "./components/calculator/calculatorContainer"
import CalculatorInput from "./components/calculator/inputs/calculatorInput";
import CalculatorOutput from "./components/calculator/outputs/calculatorOutput";

const App = () => {

  const [data, setData] = useState({
    "bill" : '',
    "tip" : '',
    "people" : '',
    "totalTip": "0.00",
    "total": "0.00",
    "resetDisabled" : true
  })

  const onChangeBill = (event) => {
    let newData = {...data}
    let validNumber = new RegExp(/^\d*\.?\d*$/);
    if (validNumber.test(event.target.value)) {
      newData.bill = (!!event.target.value) ? event.target.value.replace(/\b0+/g, '') : 0;
      setData(calculate(newData))
    }
  }

  const onChangeTip = (value) => {
    let newData = {...data}
    newData.tip = value;
    setData(calculate(newData))
  }

  const onChangeTipKeyPress = (event) => {
    let newData = {...data}
    let validNumber = new RegExp(/^\d*\.?\d*$/);
    if (validNumber.test(event.target.value)) {
      newData.tip = (!!event.target.value) ? event.target.value.replace(/\b0+/g, '') : 0;
      setData(calculate(newData))
    }
  }

  const onChangePeople = (event) => {
    let newData = {...data}
    let validNumber = new RegExp(/^\d*\.?\d*$/);
    if (validNumber.test(event.target.value)) {
      newData.people = (!!event.target.value) ? event.target.value.replace(/\b0+/g, '') : 0;
      setData(calculate(newData))
    }
  }

  const calculate = (d) => {

    if (d.people > 0) {
      let tipAmountPerPerson = (d.bill * (d.tip / 100)) / d.people;
      let totalPerPerson = (d.bill / d.people) + tipAmountPerPerson
      d.totalTip = tipAmountPerPerson.toFixed(2)
      d.total = totalPerPerson.toFixed(2)
    }

    d.resetDisabled = !(!!d.bill || !!d.tip || !!d.people);

    return d;
  }

  const reset = () => {
    setData({
      "bill" : '',
      "tip" : '',
      "people" : '',
      "totalTip": "0.00",
      "total": "0.00",
      "resetDisabled" : true
    })
  }

  return (
    <div className={classes.App}>
      <Splitter />
      <CalculatorContainer>
        <CalculatorInput 
          bill={data.bill}
          tip={data.tip}
          people={data.people} 
          onChangeBill={onChangeBill} 
          onChangeTip={onChangeTip} 
          onChangeTipKeyPress={onChangeTipKeyPress}
          onChangePeople={onChangePeople} 
        />
        <CalculatorOutput 
          totalTip={data.totalTip}
          total={data.total}
          reset={reset}
          resetDisabled = {data.resetDisabled}
        />
      </CalculatorContainer>
      {/* <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Carl Meyrick Cheng</a>.
      </div> */}
    </div>
  );
}

export default App;
