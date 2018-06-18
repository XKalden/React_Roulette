import React, { Component } from 'react';

import RouletteTable from '../rouletteTable/rouletteTable';
import { connect } from 'react-redux';


import './calculator.css';
// import { CHANGE_LUCK_NUMBER } from '../../store/actions/actionTypes';

class Calculator extends Component{
    state = {
        luckyNumber: null,
        role: null

    }


  
    //store number and find the winner
    

    // rolle a randome number  0- 36




    // winningRolleNumber = () => {



    //     console.log("-------randomNumber -------")
    //     let roleNumber = 0;
    //     roleNumber = Math.floor(Math.random() * 36 );
    //     console.log(`-------randomNumber ${roleNumber} --------`);
        
    //     // Redux State 
    //     this.props.roleNumber(roleNumber)
        
      
    //     return roleNumber;
    // }



  



    getInputDatatype = () => {
        let number = this.props.luckyNumber;

        if("string" === typeof number){
            if(number === "1st 12"){
                return 1;
            } else if(number === "2nd 12"){
                return 16;
            }else if(number === "3rd 12"){
                console.log("heyahsdfhasdfs")
                return 30;
            }else {
                console.log("Datatype fked");
            }

        } else {
            return number;
        }
    }

    choseCollumn = () => {
        let number = this.getInputDatatype();
      
        if(number === 0){
          return "0";
        } else if(number <= 12 && number >= 1){
            return "1st 12"
        } else if(number <= 24 && number >= 13){
            return "2nd 12"
        } else if(number <= 36 && number >= 25){
            return "3rd 12"
        } else {
            return "WTF happen"            
        }
    }

    doMath = () => {
        let number = this.props.luckyNumber;
        let roleNumber = this.props.roleNumberRedux; 
        let threeToOne = this.choseCollumn();

        console.log("--------RUN funciton-----")

        if(threeToOne === "0"){
            //find out if number is same as random number
            console.log("0 number:" + number + " role: " + roleNumber);
            if(roleNumber === 0){
                console.log("Win")
                return "Winner";
            } else {
                console.log("Loss")
                return "fail";
            }
        } else if(threeToOne === "1st 12"){
            console.log("1-12 number:" + number + " role: " + roleNumber);
            if(roleNumber <= 12 && roleNumber >= 1){
                console.log("WIN")
                return "Winner";
            } else {
                console.log("loss")
                return "fail";
            }
        } else if(threeToOne  === "2nd 12"){
            console.log("13-24 number:" + number + " role: " + roleNumber);
            if(roleNumber <= 24 && roleNumber >= 13){
                console.log("WIN")
                return "Winner";
            } else {
                console.log("loss")
                return "fail";
            }
        } else if(threeToOne  === "3rd 12"){
            console.log("25-36 number:" + number + " role: " + roleNumber);
            if(roleNumber <= 36 && roleNumber >= 25){
                console.log("WIN")
                return "Winner";
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


            <h2> Role Number</h2>
            {this.props.roleNumberRedux}

            <hr/>
            <h2>Status </h2>
            {this.doMath()}

            </div>
        )

    }
    
}

const mapStateToProps = (state) => {
    return {
        luckyNumber : state.myinput.inputNumber,
        roleNumberRedux : state.myinput.roleNumber
    }
}






export default connect(mapStateToProps)(Calculator);

