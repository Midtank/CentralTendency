import React, { Component } from 'react';
import Tile from './Tile';
import Container from 'react-bootstrap/Container';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {addData, switchDataset} from '../actions/index'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import {FindMean, FindMedian, FindMode, FindStdDev} from '../logic/logic.js'
class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            validInput: true
        };
    }

    handleDatasetClick = () => {
        //Take current dataset and switch to other dataset. If there is no current dataset, default to 1234
        const dataset = this.props.dataset ? this.props.dataset === '1234' ? '4321': '1234' : "1234";
        fetch(`http://localhost:3001/getData/${dataset}`, {method:'GET', headers: {"Connection": "close", Accept: 'application/json'}})
        .then(response => response.json())
        .then(jsondata => {
            console.log(jsondata)     
            this.props.dispatch(switchDataset(jsondata, dataset));    //action to add dataset to store
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const val = event.target[0].value;
        if(isNaN(val) || val === ""){
            this.setState({
                validInput: false
            });
        }else{
            this.setState({
                validInput: true,
                userInput: ""
            });
            this.props.dispatch(addData(parseInt(val)));
        }
    }

    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        });
    }
    
    render() {
        console.log(this.props.data)
        if(this.props.data){
            console.log(FindMean(this.props.data))
        }
        return (
            <Container>
                <Row>
                    <Col xs ={12} md = {6}>
                        <Tile title="Mean" header="The Average" calc={FindMean} color="primary"/>
                    </Col>
                    <Col xs ={12} md = {6} >
                        <Tile title="Median" header="The Midpoint" calc={FindMedian} color="secondary"/>
                    </Col>
                    <Col xs ={12} md = {6} >
                        <Tile title="Mode" header = "The Most Common" calc={FindMode} color="success"/>
                    </Col>
                    <Col xs ={12} md = {6}>
                        <Tile title="Standard Deviation" header="The Spread" calc={FindStdDev} color="info"/>
                    </Col>
                </Row>      
                <Button onClick={this.handleDatasetClick}>Use a dataset!</Button>      
                
                {this.props.data &&
               
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>Enter your own data</Form.Label>
                    <Form.Control type="input" value={this.state.userInput} onChange ={this.handleChange} placeholder="Enter any number."/>

                    <Button variant="primary" type="submit">
                        Add Data
                    </Button>
                </Form> 
    }
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    dataset: state.currentDataset,
    data: state.data
})

export default connect(mapStateToProps)(Dashboard);