import React, { Component } from 'react'

import { connect } from 'react-redux';


class Display extends Component{

    render(){
        return(
            <div>

                <h1>My Chosen Number </h1>
                {this.props.luckyNumber}

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

