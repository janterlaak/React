import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import update from 'immutability-helper';
import {Form, FormGroup,FormControl,
        MenuItem, NavDropdown,Well,
        Button, ButtonToolbar,PageHeader,
        HelpBlock} from 'react-bootstrap';
import Web3 from 'web3';
import _ from 'lodash';

//TestRPC or Geth on port:8545 active?
var web3 = new Web3();
if(typeof web3 !== 'undefined')
  web3 = new Web3(web3.currentProvider);
else
   web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// work in progress first try to build a UI for ethereum smart contracts.
// It uses inputfields from the NPM react-bootstrap pakkage.
// Next step: build a smart contract with get, put functions

var  pContractABI = [{" put your ABI string here"}]
var  pContractAddress = '0x....put your addressstring'
var  pContract = web3.eth.contract(pContractABI).at(pContractAddress)



class App extends Component {
  constructor(props) {
   super(props);
                //contact ;key       
   this.state = {contact: {cartType: "Cafee",
                          numberOfpoints: "" + " 12 free caffee",
                          maxPoints: "Setting max :12",
                          birdDay: "",
                          firstName: "Edgar"
                        }


              }
   };



handleChange (key,event) {
        console.log(key,event.target.value);
        //use immutability-helper to update the array on key event
        const updatedContact = update(this.state.contact, {[key] : {$set: event.target.value}});
        this.setState({contact: updatedContact});
      };

// Solidity interface code here!!!
        
        
render () {


 return (
     <div>
       <PageHeader>Card <small>Welkom: {this.state.contact.firstName}, this is your blockchain Card contract </small></PageHeader>
         <h2>Datum:  {new Date().toLocaleDateString()}</h2>
     <form>
       <Well>
       <FormGroup bsSize="large">
         <FormControl type="text"
                      placeholder="cartType"
                      onChange={this.handleChange.bind(this,"cartType")}
                      value={this.state.contact.cartType} />
       </FormGroup>
     </Well>
     <Well>
       <FormGroup bsSize="large">
         <FormControl type="text"
                      placeholder="Aantal punten"
                      onChange={this.handleChange.bind(this,"numberOfpoints")}
                      value={this.state.contact.numberOfpoints}/>
       </FormGroup>
     </Well>
   <Well>
       <FormGroup bsSize="large">
         <FormControl type="text"
                      placeholder="Maximaal aantal punten"
                      onChange={this.handleChange.bind(this,"maxPoints")}
                      value={this.state.contact.maxPoints} />
       </FormGroup>
    </Well>
    <Well>
       <FormGroup bsSize="large">
         <FormControl type="text"
                      placeholder="Verjaardag"
                      onChange={this.handleChange.bind(this,"birdDay")}
                      value={this.state.contact.birdDay}/>
       </FormGroup>
    </Well>
     </form>
     </div>
   );
 }
};
export default App;
