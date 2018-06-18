import React, { Component } from 'react'

import { connect } from 'react-redux';

import "./display.css";


class Display extends Component{



    // winningRolleNumber = () => {

    //     console.log("-------randomNumber -------")
    //     let roleNumber = 0;
    //     roleNumber = Math.floor(Math.random() * 36 );
    //     console.log(`-------randomNumber ${roleNumber} --------`);
        
    //     // Redux State 
    //     this.props.roleNumber(roleNumber);
        
    //     return roleNumber;
    // }


    

    // tableClicked = (e) => {
    //     console.log("click once")
    //     let winningRole = this.winningRolleNumber();
    //     console.log("winning role " + winningRole);

    //     let chosenNumber = e;
    //     this.setState({
    //         number: chosenNumber
    //     })

    //     this.props.changeLuckyNumber(e);

    // }

    // Random Rolles
    randomRolle = (number) => {
        const allRole = [];
        for(var i = 1; i <=number; i++){   
            let roleNumber = 0;
            roleNumber = Math.floor(Math.random() * 36 );
            
            console.log("index" + i + " " + roleNumber);

            allRole.push(roleNumber);
        }
        return allRole;
    } 

    
    moneyAlgorith = (arr) => {
        const allrole = arr;
        console.log(allrole);
        const winningArray = [];
    
        allrole.map(function(num,i){
            if(num === 0){
                console.log('zeor found')
                winningArray.push(0);
                return num;
            } else if(num >=1 && num <=12){
                console.log("1-12: " + num);
                winningArray.push(1);
                return num;
            } else if(num >=13 && num <=24){
                console.log("13-24: " + num);
                winningArray.push(2);
                return num;
            } else if(num >=25 && num <=36){
                console.log("25-36: " + num);
                winningArray.push(3);
                return num;
            } else {
                console.log("fked")
            }
        });



        this.switchCollumn(winningArray);
        
    
    }

    switchCollumn = (arr) => {
        const winningArray = arr;
        
        const UserPick = [];
        let chosenNumber = 2;
        let cash = 25;

        for(var i = 1; i <=15; i++){   

            if(winningArray[i] !== chosenNumber){
                if(UserPick[i] === UserPick[i - 1] && UserPick[i+1] === UserPick[i+2]){
                    chosenNumber = Math.floor(Math.random() * 2) + 1;
                    UserPick.push(chosenNumber);
                    console.log("index: " + i + " " + cash);
                } else {
                    cash += 25;
                    UserPick.push(chosenNumber);
                    console.log("index: " + i + " " + cash);
                }
            }
            
            if(winningArray[i] === chosenNumber){
                cash = 25;
                let randNumb = Math.floor(Math.random() * 3) + 1;
                
                if(randNumb === chosenNumber){
                    randNumb = Math.floor(Math.random() * 3) + 1;
                } 

                if(randNumb !== chosenNumber){
                    UserPick.push(chosenNumber);
                }


                chosenNumber = randNumb;
                UserPick.push(chosenNumber);
                console.log("index: " + i + " " + cash);
            }     
        }

        console.log(winningArray);
        console.log(UserPick);
        
       
    
        
        //switch to 1 or 2 if number won


        //switch only after number won



        //increase bit size per loss


    }




    play = () => {
  
        this.moneyAlgorith(this.randomRolle(15));
     

    }




    render(){

        console.log(this.props.luckyNumber);
        return(
            <div className="display__div">
                <h1>My Chosen Number </h1>
                { (this.props.luckyNumber <=0 || this.props.luckyNumber)? this.props.luckyNumber : "Please Select"}
            
                <h2> Role Number</h2>
                {this.props.roleNumberRedux}

                <button onClick={this.play}>PLAY</button>

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



export default connect(mapStateToProps)(Display);

