import React, { Component } from 'react';

// export default class MyCountry extends Component {
//     constructor(props) {
//         super(props);
        
//         this.state = {
//             name : 'India',
//             Population : '142 Billion'
//         }
//     }

    // HandleCounty = () => {
    //     this.setState({
    //          name : 'USA',
    //         Population : '14 Billion'
    //     })
    //     if(this.state.name === 'India'){
    //         this.setState({
    //                  name : 'USA',
    //                 Population : '14 Billion'
    //             })
    //     }else{
    //         this.setState({
    //             name : 'India',
    //             Population : '142 Billion'
    //         })
    //     }
    // }
    export default class MyCountry extends Component {
        constructor(props) {
            super(props);
            
            this.state = {
                name: true,
                Population : true
            }
        }

    HandleCounty = () => {
        this.setState((prevState) => ({
            name: !prevState.name,
            Population: !prevState.Population

          }));
    }

    render() {
        return (
            <div>
                <h2>Class Based Component</h2>
                <div>MyCountry : {this.state.name ? 'INDIA' : 'USA'}</div>
                <div>Population : {this.state.Population ? '135 Billion' : '15 Billion'}</div>
                <br></br>
                <button onClick={this.HandleCounty}>Change Country</button>
            </div>
        );
    }
}

