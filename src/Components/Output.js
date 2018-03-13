import React, { Component } from 'react';

class Output extends Component {
  toFeet(n){
    let realFeet = ((n*0.393700)/12);
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet-feet)*12);
    return feet+"'"+inches;
  }
  toLbs(n){
    var nearExact = n/0.45359237;
    var lbs = Math.floor(nearExact);
    return lbs;
  }
  render() {
    let height = this.toFeet(this.props.data.height);
    let weight = this.toLbs(this.props.data.weight);
    let bmi = this.props.data.bmi;
    let bmiClass = this.props.data.bmiClass;
    return (
      <div className="output">
        <h3>{height}</h3>
        <h3>{weight}lbs</h3>
        <h3>{bmi}</h3>
        <h3 className={(bmiClass === 'Obese')? 'danger': ''}>{bmiClass} {(bmiClass === 'Obese')? <a href="http://something.com">What Can I do?</a>: ''}</h3>
      </div>
    );
  }
}

export default Output;
