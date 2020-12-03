import React, { Component } from 'react';
import SilverWare from '../SilverWare.js/SilverWare'

class DinnerSupplies extends Component {
    render() {
        return(
            <div>
                <h2>Dinner Supplies</h2>
                <SilverWare name="Spoons" count={this.props.count} />
                <SilverWare name="Forks" count={this.props.count} />
                <SilverWare name="Knives" count={this.props.count} />       
            </div>
        ) // end return
    } // end render
} // end class

export default DinnerSupplies;