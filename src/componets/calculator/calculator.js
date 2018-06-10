import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import RouletteTable from '../rouletteTable/rouletteTable';

import './calculator.css';

class Calculator extends Component{
    state = {
        luckyNumber: null
    }



    betNumber(e) {
        const luckyNumber = e.target.value;
        console.log(luckyNumber);
        return this.setState({luckyNumber });
    }

    submitHandler = (e) => {    
        e.preventDefault();
        this.props.changeLuckyNumber(this.state.luckyNumber);
    }

    render(){
        return( 
            <div className="calculator__div"> 


                <RouletteTable />


                <form onSubmit={this.submitHandler}>
                    <input type='number' onChange={(e)=>this.betNumber(e)} />
                    {this.state.luckyNumber}
                </form>
            
            </div>
            );
    }
}




const mapDispathToProps = (dispatch) => {
    return {
        changeLuckyNumber: (number) => dispatch(actions.changeLuckyNumber(number))
    }
}

export default connect(null, mapDispathToProps)(Calculator);

