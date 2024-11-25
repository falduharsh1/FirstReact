import React, { Component } from 'react';
import MyCountryProps from './MyCountryProps';

export default class MyCountry extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name : 'India',
            Population : '142 Billion'
        }
    }

    HandleCounty = () => {
        if(this.state.name === 'India'){
            this.setState({
                     name : 'USA',
                    Population : '14 Billion'
                })
        }else{
            this.setState({
                name : 'India',
                Population : '142 Billion'
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Class Based Component</h2>
                <div>MyCountry : {this.state.name}</div>
                <div>Population : {this.state.Population}</div>
                <br></br>
                <button onClick={this.HandleCounty}>Change Country</button> 
                <MyCountryProps country={this.state.name} Population={this.state.Population}/>
            </div>
        );
    }
}
    // export default class MyCountry extends Component {
    //     constructor(props) {
    //         super(props);
            
    //         this.state = {
    //             name: true,
    //             Population : true
    //         }
    //     }

    // HandleCounty = () => {
    //     this.setState((prevState) => ({
    //         name: !prevState.name,
    //         Population: !prevState.Population

    //       }));
    // }

    
