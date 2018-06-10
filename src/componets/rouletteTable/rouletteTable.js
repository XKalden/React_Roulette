import React, { Component } from 'react';

import './rouletteTable.css';


class RoulettTable extends Component {
    state = {
        number: null

    } 


    tableClicked = (e) => {

        console.log(e);
    }

 


    render(){
        let wow = () => {
            for (let i=0; i<12; i++){

                if(i%2 === 0){
                    <td> </td>
                }
            
            }
        }

        

      

        return(
            <div className="table__div" >
                <table cellSpacing="10">
                    <tbody>
                    <tr>
                        <td onClick={(e) => this.tableClicked(0)} className="green" rowSpan="3"> 0</td> 
                        <td onClick={(e) => this.tableClicked(3)} className="black">3</td>
                        <td onClick={(e) => this.tableClicked(6)}className="red"> 6</td>
                        <td onClick={(e) => this.tableClicked(9)}className="black"> 9 </td>
                        <td onClick={(e) => this.tableClicked(12)}className="red"> 12</td>
                        <td onClick={(e) => this.tableClicked(15)}className="black">15 </td>
                        <td onClick={(e) => this.tableClicked(18)}className="red"> 18</td>
                        <td onClick={(e) => this.tableClicked(21)}className="black">21</td>
                        <td onClick={(e) => this.tableClicked(24)}className="red"> 24</td> 
                        <td onClick={(e) => this.tableClicked(27)}className="black"> 27</td>
                        <td onClick={(e) => this.tableClicked(30)}className="red">30</td>
                        <td onClick={(e) => this.tableClicked(33)}className="black">33</td> 
                        <td onClick={(e) => this.tableClicked(36)}className="red">36</td>
                        <td onClick={(e) => this.tableClicked("2 to 1")}className="blue ChangeW" colSpan="2">2 to 1 </td>
                    </tr>
                    {wow()}
        
                    <tr>    
                        


                        <td className="red">2</td>
                        <td className="black"> 5</td>
                        <td className="red"> 8</td>
                        <td className="black"> 11</td>
                        <td className="red">14 </td>
                        <td className="black"> 17</td>
                        <td className="red">20</td>
                        <td className="black"> 23</td> 
                        <td className="red"> 26</td>
                        <td className="black">29</td>
                        <td className="red">32</td> 
                        <td className="black">35</td>
                        <td className="blue" colSpan="2">2 to 1 </td>
                    </tr>
                    <tr>
                        <td className="black">1</td>
                        <td className="red"> 4</td>
                        <td className="black"> 7 </td>
                        <td className="red"> 10</td>
                        <td className="black">13 </td>
                        <td className="red"> 16</td>
                        <td className="black">19</td>
                        <td className="red"> 22</td> 
                        <td className="black"> 25</td>
                        <td className="red">28</td>
                        <td className="black">31</td> 
                        <td className="red">34</td>
                        <td className="blue" colSpan="2">2 to 1 </td>
                    </tr>
                    <tr>
                        <td className="empty__td"> </td>
                        <td className="blue" colSpan="4">1st 12</td>
                        <td className="blue" colSpan="4">2nd 12</td>
                        <td className="blue" colSpan="4">3rd 12</td>
                    </tr>

                    <tr>
                        <td className="empty__td"></td>
                        <td className="peach" colSpan="2"> 1 to 18</td>
                        <td className="peach" colSpan="2"> EVEN</td>
                        <td className="red" colSpan="2"> RED</td>
                        <td className="black" colSpan="2"> BLACK</td>
                        <td className="peach" colSpan="2"> ODD</td>         
                        <td className="peach" colSpan="2"> 19 to 36</td>
                    </tr>

                    </tbody>

                </table>
            </div>
        )
    }
}


export default RoulettTable;