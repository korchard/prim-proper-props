import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GuestList from '../GuestList/GuestList'
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies'
import GuestForm from '../GuestForm/GuestForm'
import PartyLeader from '../PartyLeader/PartyLeader'

class App extends Component {
  state = {
    guestList: [],
    newGuest: {
      name: '',
      kidsMeal: 'no',
    },
  }

  deleteGuest = (event) => {
    console.log('in deleteGuest');
    this.setState({guestList: this.state.guestList.filter(function() {
      return guestList !== event.target.value
      })
    })
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newGuest: {
        ...this.state.newGuest,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.newGuest.name) {
      this.setState({
        guestList: [...this.state.guestList, this.state.newGuest],
        newGuest: {
          name: '',
          kidsMeal: 'no',
        },
      });
    } else {
      alert('The new guest needs a name!');
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PartyLeader leader={this.state.guestList[0]}/>
        <GuestForm
        newGuest={this.state.newGuest}
        handleChangeFor={this.handleChangeFor}
        handleSubmit={this.handleSubmit}
        />
        <GuestList guests={this.state.guestList} deleteGuest={this.deleteGuest}/>
        <DinnerSupplies count={this.state.guestList.length} />
        <Footer />
      </div>
    );
  }
}

export default App;
