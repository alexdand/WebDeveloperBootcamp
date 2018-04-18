import React, { Component } from 'react';

class HobbyList extends Component {
    render() {
        const hobbies = ["Comer", "Dormir", "Pedir que le abran la puerta para salir"];
        const liStyle = { fontSize: '1.5em', listStyle: 'none' };
        return (
            <ul>
                {hobbies.map((hobby, index) => {
                    return <li key={index} style={liStyle}>{hobby}</li>;
                })}
            </ul>
        );
    }
}

export default HobbyList;
