import React, { Component } from 'react';

class Guest extends Component {
    render() {
        return(
            <>
                {this.props.guests.map(guest => (
                <tr>
                    <td>{guest.name}</td>
                    <td>{guest.kidsMeal}</td>
                    <td><button onClick={(event) => {return this.props.deleteGuest(event, guest)}}>Delete</button></td>
                </tr>
                ))}
            </>
        ) // end return
    } // end render
} // end class

export default Guest;