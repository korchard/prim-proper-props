// imports - basic 1
import { Component } from 'react'; // { Component } is destructuring - we are only going to import component from react and not all of react

// class - basic 2
class PartyLeader extends Component {
    render() {
        return(
            <div>
                <h2>hello from PartyLeader component</h2>
            </div>
        ) // end return
    } // end render
} // end class

// export - basic 3
export default PartyLeader;