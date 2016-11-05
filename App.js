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



var  pContractABI = [{"constant":true,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"type":"function"}]
var  pContractAddress = '0x3ef2a593409e274aa12e61510059bac9b3ca3483'
var  pContract = web3.eth.contract(pContractABI).at(pContractAddress)



class App extends Component {
  constructor(props) {
   super(props);
   this.state = {contact: {cartType: "Cafee",
                          numberOfpoints: "" + " Bij punten 12 gratis koffie",
                          maxPoints: "Setting max :12",
                          birdDay: "",
                          firstName: "Jan"
                        }


              }
   };



handleChange (key,event) {
        console.log(key,event.target.value);
        const updatedContact = update(this.state.contact, {[key] : {$set: event.target.value}});
        this.setState({contact: updatedContact});
      };


render () {


 return (
     <div>
       <PageHeader>Card <small>Welkom: {this.state.contact.firstName}, dit is je persoonlijke account van de blockchain Card contract </small></PageHeader>
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
