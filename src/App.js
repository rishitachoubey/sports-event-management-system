import React, { useState } from 'react';
import EventList from './components/EventList/EventList';
import SelectedEvents from './components/EventList/SelectedEvents';
import './App.scss';

const App = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleSelectEvent = (event) => {
    setSelectedEvents(prevSelectedEvents => [...prevSelectedEvents, event]);
  };

  return (
    <div>
      <h1>Sports Events Registration</h1>
      <main className="app-main">
        <div className="app-container">
          <EventList onSelectEvent={handleSelectEvent} />
  
        </div>
      </main>
    </div>
  );
};

export default App;
