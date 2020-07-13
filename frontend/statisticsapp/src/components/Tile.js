import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import {connect} from 'react-redux';
class Tile extends Component {
    
    render() {
        const val = this.props.data ? this.props.calc(this.props.data) : undefined
        console.log(`${this.props.header}: ${val}`)
        return (
            <div>
                <Card 
            bg = {this.props.color}
            key= {this.props.color}
            border="success"
            style = {{width: '18rem'}}
            className = "mb-2">
                <Card.Header>{this.props.header}</Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{val ? val : `Please use a dataset.`}</Card.Text>
                </Card.Body>
            </Card>
            </div>
            
        );
    }
}
const mapStateToProps = state => ({
    data: state.data
})

export default connect(mapStateToProps)(Tile);