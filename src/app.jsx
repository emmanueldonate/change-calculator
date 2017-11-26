import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        due:'',
        received:'',


        twenties:'',
        tens:'',
        fives:'',
        ones:'',
        quarters:'',
        dimes:'',
        nickels:'',
        pennies:'',

    }

this.handleDue = this.handleDue.bind(this);
this.handleReceived = this.handleReceived.bind(this);
this.handleClick= this.handleClick.bind(this);

}

handleDue(e) {
    this.setState({due: e.target.value});
    console.log(this.state.due);
}


handleReceived(e) {
    this.setState({received: e.target.value});
    console.log(this.state.received);
}


handleClick(e) {

   //e.preventDefault();


 const distribution = {    
         twenty: 2000,
         ten: 1000,
         five: 500,
         one: 100,
         quarter: 25,
         dime: 10,
         nickel: 5,
         penny: 1,

        }

        let difference =  ((this.state.received) - (this.state.due)).toFixed(2) * 100;

         let twenties = Math.floor(difference/distribution.twenty);
         difference = difference - (twenties * distribution.twenty);

         let tens = Math.floor(difference/distribution.ten);
         difference = difference - (tens * distribution.ten);

         let fives = Math.floor(difference/distribution.five);
         difference = difference - (fives * distribution.five);

         let ones = Math.floor(difference/distribution.one);
         difference = difference - (ones * distribution.one);

         let quarters = Math.floor(difference/distribution.quarter);
         difference = difference - (quarters * distribution.quarter);

         let dimes = Math.floor(difference/distribution.dime);
         difference = difference - (dimes * distribution.dime);

         let nickels = Math.floor(difference/distribution.nickel);
         difference = difference - (nickels * distribution.nickel);

         let pennies = Math.floor(difference/distribution.penny);
         difference = difference - (pennies * distribution.penny);

        console.log(this.handleClick);
        this.setState({
            twenties,
            tens,
            fives,
            ones,
            quarters,
            dimes,
            nickels,
            pennies
        })
};

 render() {
     return (

<div className="row">
<header>
     <h1>Change Calculator</h1>
    <hr></hr>
</header>




    <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="bg">

            <h2>Enter Information</h2>
            
            <h3>How much is due ?</h3>
                <input id="due" type="number" name="amountDue" value={this.state.due} onChange={this.handleDue}></input>
            <h3>How much is received ?</h3>
                <input id="received" type="number" name="amountReceived" value={this.state.received}  onChange={this.handleReceived}></input>

            <button id="click" className="btn" name="submit" type="submit" onClick={this.handleClick}>Calculate</button>    
        </div>
    </div>


    <div className=" col-lg-8 col-md-8 col-sm-12">

        <div className="bg">

            <div className=" greenbox col-lg-12">
                <output>The total change due is.....{this.props.handleClick}</output>
            </div>

            <div className='row p0'>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="box">
                        <h2>Twenties</h2>
                        <h3 id="twenties">{this.state.twenties}</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="box">
                        <h2>Tens</h2>
                        <h3 id="tens">{this.state.tens}</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="box">
                        <h2>Fives</h2>
                        <h3 id="fives">{this.state.fives}</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="box">
                        <h2>Ones</h2>
                        <h3 id="ones">{this.state.ones}</h3>
                    </div>
                </div>


<div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="box">
                        <h2>Quarters</h2>
                        <h3 id="quarters">{this.state.quarters}</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="box">
                        <h2>Dimes</h2>
                        <h3 id="dimes">{this.state.dimes}</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="box">
                        <h2>Nickels</h2>
                        <h3 id="nickels">{this.state.nickels}</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="box">
                        <h2>Pennies</h2>
                        <h3 id="penny">{this.state.pennies}</h3>
                    </div>
                </div>

            </div>
        
        </div>        

    
    </div>

</div>








         );
 }
}

export default App;
