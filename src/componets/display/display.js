import React, { Component } from 'react'

import { connect } from 'react-redux';

import "./display.css";

class Display extends Component{

    render(){

        console.log(this.props.luckyNumber);
        return(
            <div className="display__div">
                <h1>My Chosen Number </h1>
                { (this.props.luckyNumber <=0 || this.props.luckyNumber)? this.props.luckyNumber : "Please Select"}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        luckyNumber : state.myinput.inputNumber
    }
}

export default connect(mapStateToProps)(Display);

