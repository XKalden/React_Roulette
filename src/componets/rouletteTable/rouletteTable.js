import React, { Component } from 'react';
import { connect } from 'react-redux';

import './rouletteTable.css';
import * as actions from '../../store/actions/index';

class RoulettTable extends Component {
    state = {
        number: null

    } 

    tableClicked = (e) => {
        this.setState({number:e}) 
        this.props.changeLuckyNumber(e);
    }

    render(){     
        return(
            <div className="table__div" >
                <table cellSpacing="10">
                    <tbody>
                    <tr>
                        <td onClick={(e) => this.tableClicked(0)} className="green" rowSpan="3"> 0</td> 
                        <td onClick={(e) => this.tableClicked(3)} className="black">3</td>
                        <td onClick={(e) => this.tableClicked(6)} className="red"> 6</td>
                        <td onClick={(e) => this.tableClicked(9)} className="black"> 9 </td>
                        <td onClick={(e) => this.tableClicked(12)} className="red"> 12</td>
                        <td onClick={(e) => this.tableClicked(15)} className="black">15 </td>
                        <td onClick={(e) => this.tableClicked(18)} className="red"> 18</td>
                        <td onClick={(e) => this.tableClicked(21)} className="black">21</td>
                        <td onClick={(e) => this.tableClicked(24)} className="red"> 24</td> 
                        <td onClick={(e) => this.tableClicked(27)} className="black"> 27</td>
                        <td onClick={(e) => this.tableClicked(30)} className="red">30</td>
                        <td onClick={(e) => this.tableClicked(33)} className="black">33</td> 
                        <td onClick={(e) => this.tableClicked(36)} className="red">36</td>
                        <td onClick={(e) => this.tableClicked("2 to 1")} className="blue ChangeW" colSpan="2">2 to 1 </td>
                    </tr>
        
        
                    <tr>    
                        <td onClick={(e) => this.tableClicked(2)} className="red">2</td>
                        <td onClick={(e) => this.tableClicked(5)} className="black"> 5</td>
                        <td onClick={(e) => this.tableClicked(8)} className="red"> 8</td>
                        <td onClick={(e) => this.tableClicked(11)} className="black"> 11</td>
                        <td onClick={(e) => this.tableClicked(14)} className="red">14 </td>
                        <td onClick={(e) => this.tableClicked(17)} className="black"> 17</td>
                        <td onClick={(e) => this.tableClicked(20)} className="red">20</td>
                        <td onClick={(e) => this.tableClicked(23)} className="black"> 23</td> 
                        <td onClick={(e) => this.tableClicked(26)} className="red"> 26</td>
                        <td onClick={(e) => this.tableClicked(29)} className="black">29</td>
                        <td onClick={(e) => this.tableClicked(32)} className="red">32</td> 
                        <td onClick={(e) => this.tableClicked(35)} className="black">35</td>
                        <td onClick={(e) => this.tableClicked("2 to 1")} className="blue" colSpan="2">2 to 1 </td>
                    </tr>
                    <tr>
                        <td onClick={(e) => this.tableClicked(1)} className="black">1</td>
                        <td onClick={(e) => this.tableClicked(4)} className="red"> 4</td>
                        <td onClick={(e) => this.tableClicked(7)} className="black"> 7 </td>
                        <td onClick={(e) => this.tableClicked(10)} className="red"> 10</td>
                        <td onClick={(e) => this.tableClicked(13)} className="black">13 </td>
                        <td onClick={(e) => this.tableClicked(16)} className="red"> 16</td>
                        <td onClick={(e) => this.tableClicked(19)} className="black">19</td>
                        <td onClick={(e) => this.tableClicked(22)} className="red"> 22</td> 
                        <td onClick={(e) => this.tableClicked(25)} className="black"> 25</td>
                        <td onClick={(e) => this.tableClicked(28)} className="red">28</td>
                        <td onClick={(e) => this.tableClicked(31)} className="black">31</td> 
                        <td onClick={(e) => this.tableClicked(34)} className="red">34</td>
                        <td onClick={(e) => this.tableClicked("2 to 1")} className="blue" colSpan="2">2 to 1 </td>
                    </tr>
                    <tr>
                        <td className="empty__td"> </td>
                        <td onClick={(e) => this.tableClicked("1st 12")} className="blue" colSpan="4">1st 12</td>
                        <td onClick={(e) => this.tableClicked("2nd 12")} className="blue" colSpan="4">2nd 12</td>
                        <td onClick={(e) => this.tableClicked("3rd 12")} className="blue" colSpan="4">3rd 12</td>
                    </tr>

                    <tr>
                        <td className="empty__td"></td>
                        <td onClick={(e) => this.tableClicked("1 to 18")} className="peach" colSpan="2"> 1 to 18</td>
                        <td onClick={(e) => this.tableClicked("EVEN")} className="peach" colSpan="2"> EVEN</td>
                        <td onClick={(e) => this.tableClicked("RED")} className="red" colSpan="2"> RED</td>
                        <td onClick={(e) => this.tableClicked("BLACK")} className="black" colSpan="2"> BLACK</td>
                        <td onClick={(e) => this.tableClicked("ODD")} className="peach" colSpan="2"> ODD</td>         
                        <td onClick={(e) => this.tableClicked("19 to 36")} className="peach" colSpan="2"> 19 to 36</td>
                    </tr>
                    </tbody>

                </table>


            </div>
        )
    }
}

const mayDispatchtoProps = (dispatch) => {
    
    return {
        changeLuckyNumber: (number) => dispatch(actions.changeLuckyNumber(number)) 

    }


}


export default connect( null, mayDispatchtoProps)(RoulettTable);