import React, { Component } from 'react';

import RouletteTable from '../rouletteTable/rouletteTable';
import { connect } from 'react-redux';

import './calculator.css';
// import { CHANGE_LUCK_NUMBER } from '../../store/actions/actionTypes';

class Calculator extends Component{
    constructor(props){
        super(props)

        this.state = {
            luckyNumber: null,
            roleNumber: 0
        }
    }
  
    //store number and find the winner
    

    // rolle a randome number  0- 36




    winningRolleNumber = () => {
        console.log("-------randomNumber -------")
        let roleNumber = 0;
        roleNumber = Math.floor(Math.random() * 36 );
        console.log(`-------randomNumber ${roleNumber} --------`);
        return roleNumber;
    }


    doMath = () => {
        let number = this.props.luckyNumber;
        let roleNumber = this.winningRolleNumber(); 
        console.log("--------RUN funciton-----")

        if(number === 0){
            //find out if number is same as random number
            console.log("0 number:" + number + " role: " + roleNumber);
            if(roleNumber === 0){
                console.log("Win")
                return number;
            } else {
                console.log("Loss")
                return "fail";
            }
        } else if(number <= 12 && number >= 1){
            console.log("1-12 number:" + number + " role: " + roleNumber);
            if(roleNumber <= 12 && roleNumber >= 1){
                console.log("WIN")
                return number;
            } else {
                console.log("loss")
                return "fail";
            }
        } else if(number <= 24 && number >= 13){
            console.log("13-24 number:" + number + " role: " + roleNumber);
            if(roleNumber <= 24 && roleNumber >= 13){
                console.log("WIN")
                return number;
            } else {
                console.log("loss")
                return "fail";
            }
        } else if(number <= 36 && number >= 25){
            console.log("25-36 number:" + number + " role: " + roleNumber);
            if(roleNumber <= 36 && roleNumber >= 25){
                console.log("WIN")
                return number;
            } else {
                console.log("loss")
                return "fail";
            }
        } else {
            return "WTF happen"            
        }
    }

    

    

    render(){
        console.log('------Render------')
        var number = this.props.luckyNumber
        return (

            <div>
            <RouletteTable />
            <h2>Pick number </h2>
            {number} 
            <hr/>


            <h2> State Number</h2>
            {this.state.roleNumber}

            <hr/>
            <h2>Role Number </h2>

            {this.doMath()}

            </div>


        )

    }
    
}

const mapStateToProps = (state) => {
    return {
        luckyNumber : state.myinput.inputNumber
    }
}






export default connect(mapStateToProps)(Calculator);

