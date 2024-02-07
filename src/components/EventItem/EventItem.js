import React from 'react';
import './EventItem.scss';

const EventItem = ({ event, onSelect, isDisabled }) => {
  const handleClick = () => {
    console.log("Button clicked");
    onSelect(event);
  };

  return (
    <div className="event-card">
      <div className="event-card-content">
        <div className="event-type-indicator" data-event-type={event.event_category[0]}></div>
        <div className="event-details">
          <h2 className="event-name">{event.event_name}</h2>
          <div className="event-info">
            <p className="event-category">Category: {event.event_category}</p>
            <p className="event-time">Time: {`${event.start_time} - ${event.end_time}`}</p>
          </div>
          <div className="event-action">
            <button className="event-select-btn" onClick={handleClick} disabled={isDisabled}>Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
