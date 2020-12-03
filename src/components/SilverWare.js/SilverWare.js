import React, { Component } from 'react';

class SilverWare extends Component {
    render() {
        return(
            <div>
                {this.props.name}: {this.props.count * 2}
            </div>
        ) // end return
    } // end render
} // end class

export default SilverWare;