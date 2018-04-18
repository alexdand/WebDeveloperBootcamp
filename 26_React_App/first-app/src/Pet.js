import React, { Component } from 'react';
import HobbyList from './HobbyList';
import './Pet.css';

class Pet extends Component {
    render() {
        return (<div className="card">
                    <h2 className="name">Moxie</h2>
                    <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg" width="500" alt="some cute random cat" />
                    <h5 style={{ fontSize: '2em', margin: '2px' }}>Hobbies:</h5>
                    <HobbyList />
                </div>);
    }
}

export default Pet;
