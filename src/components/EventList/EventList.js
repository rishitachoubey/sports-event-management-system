import React, { useState, useEffect } from 'react';
import EventItem from '../EventItem/EventItem';
import PaginationControl from '../PaginationControl/PaginationControl';
import Loader from '../Loader/Loader';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import NoEventsFallback from '../NoEventsFallback/NoEventsFallback';
import { fetchEvents } from '../../services/apiService';
import SelectedEvents from './SelectedEvents'; // Import SelectedEvents component
import './EventList.scss';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(5);

  useEffect(() => {
    const getEvents = async () => {
      setLoading(true);
      try {
        const fetchedEvents = await fetchEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        setError('Failed to load events');
      }
      setLoading(false);
    };
    getEvents();
  }, []);

  // Function to handle event selection
  const handleSelectEvent = (event) => {
    setSelectedEvents(prevSelectedEvents => {
      const updatedEvents = [...prevSelectedEvents, event];
      console.log("Selected events:", updatedEvents);
      return updatedEvents;
    });
  };

  // Get current events for pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="event-list-container">
      <div className="event-list">
        <h1>Event List</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorDisplay message={error} />
        ) : events.length > 0 ? (
          <>
            {currentEvents.map(event => (
              <EventItem
                key={event.id}
                event={event}
                onSelect={handleSelectEvent}
                isDisabled={selectedEvents.some(selectedEvent => {
                  return (
                    (event.start_time >= selectedEvent.start_time && event.start_time <= selectedEvent.end_time) ||
                    (event.end_time >= selectedEvent.start_time && event.end_time <= selectedEvent.end_time)
                  );
                })}
              />
            ))}
            <PaginationControl
              currentPage={currentPage}
              totalPages={Math.ceil(events.length / eventsPerPage)}
              onPageChange={paginate}
            />
          </>
        ) : (
          <NoEventsFallback />
        )}
      </div>
      <div className="selected-events-container">
        <SelectedEvents selectedEvents={selectedEvents} /> {/* Render SelectedEvents component */}
      </div>
    </div>
  );
};

export default EventList;
