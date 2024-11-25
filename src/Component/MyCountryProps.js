import React, { Component } from 'react';

export default class MyCountryProps extends Component {
    render() {
        return (
            <>
                <h2>Country: {this.props.country === 'India' ? 'Surat' : 'New York'}</h2>
                <h2>Population: {this.props.Population === '142 Billion' ? '10 Million' : '5 Million'}</h2>
                <div>MyCountryProps</div>
            </>
        );
    }
}

