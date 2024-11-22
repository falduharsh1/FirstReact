import React, { Component } from 'react';

export default class MyCountry extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name : 'India',
            Population : '142 Billion'
        }
    }

    HandleCounty = () => {
        this.setState({
             name : 'USA',
            Population : '14 Billion'
        })
    }
    
    render() {
        return (
            <div>
                <h2>Class Based Component</h2>
                <div>MyCountry : {this.state.name}</div>
                <div>Population : {this.state.Population}</div>
                <button onClick={this.HandleCounty}>Change Country</button>
            </div>
        );
    }
}

