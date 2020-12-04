import React, { Component } from 'react';
import Guest from '../Guest/Guest';

class GuestList extends Component {

    render() {
        return(
            <div>
            <h2>Guest List</h2>
            <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Kid's Meal</th>
                </tr>
            </thead>
            <tbody>
                <Guest key={guest.name} />
            </tbody>
            </table>
            </div>
        ) // end return
    } // end render
} // end class

export default GuestList;