import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Events from './components/Event';

class App extends Component {
  state = {
    date: new Date(),
    events: [
      {
        title: " ",
        eDate: " ",
        details: 
          "There are no events today!",
        location: ""
      },
      {
        title: "5K Fun Run",
        eDate: "11/06/2020",
        details: 
          "Anyone welcome! Meet at the pavilion in Mayer Park at 6.20pm for a 10 minute warm-up. The run will then start at 6.30pm.",
        location: "Mayer Park"
      },
      {
        title: "The BFG",
        eDate: "12/06/2020",
        details: 
          "Bring the whole family to see this great stage production of the Roald Dahl classic, 'The BFG'. Doors open at 6.00pm.",
        location: "Gladstone Theatre, Port Sunlight"
      },
    ]
  }
 
  onClickDay = (date) => {
    this.setState({ date })
  }
  onChange = (date) => {
    // date set to that just set by onClickDay
    let dateToCheck = this.state.date.toLocaleDateString();
    console.log(dateToCheck);
    
  }
  
  render() {
    let allEvents = this.state.events.map((event, index) => {
      return <allEvents 
        key = {index} 
        title = {this.title} 
        eDate = {this.eDate} 
        details = {this.details} 
        location = {this.location}
      />
    })
    return (
      <div>
        <h1>Events Calendar</h1>
        <div className = "Wrapper">
          <Calendar
            onChange={this.onChange}
            onClickDay={this.onClickDay}
            value={this.state.date}
          />
          <Events 
            onChange={this.onChange}
            dateToCheck={this.dateToCheck}

          />
        </div>
      </div>
    );
  }
}

export default App;