import React from 'react';
 
const Events = (props) => {
  return (
    <div className = "Container">
      <h2>{props.title}</h2>
      <p>{props.details}</p>
      <p>{props.eDate}</p>
      <div>
        {/* <allEvents /> */}
      </div>
    </div>
  );
}

export default Events;