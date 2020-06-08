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
    // console.log(`dateToCheck = ${dateToCheck}`);

    if(dateToCheck === this.state.events[1].eDate){
      console.log(`The event "${this.state.events[1].title}" is on the ${this.state.events[1].eDate}!`);
    }else if(dateToCheck === this.state.events[2].eDate){
      console.log(`The event "${this.state.events[2].title}" is on the ${this.state.events[2].eDate}!`);
    }else{
      console.log(`There are no events on ${dateToCheck}`)
    }
  };
  render() {
    // let allEvents = this.state.events.map((event, index) => {
    //   return <allEvents 
    //     key = {index} 
    //     title = {this.state.events[1].title} 
    //     eDate = {this.state.events[1].eDate} 
    //     details = {this.state.events[1].details} 
    //     location = {this.state.events[1].location}
    //   />;
    // });
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
            title={this.title}
            details={this.title}
            eDate={this.eDate}
          />
        </div>
      </div>
    );
  }
}

export default App;