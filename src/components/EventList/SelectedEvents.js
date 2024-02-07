import React, { useState } from 'react';
import EventItem from '../EventItem/EventItem';
import PaginationControl from '../PaginationControl/PaginationControl';
import './SelectedEvents.scss';

const SelectedEvents = ({ selectedEvents, onRemoveEvent }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5; // Number of events per page

  // Calculate indexes of events to display on the current page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = selectedEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  // console.log("current ",currentEvents)
  // console.log("selectedEvents ",selectedEvents)

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="selected-events">
      <h1>Selected Events</h1>
      {/* Render selected events */}
      {currentEvents.map((event) => (
        <EventItem key={event.id} event={event} onRemove={onRemoveEvent} />
      ))}
      {/* Pagination control */}
      <PaginationControl
        currentPage={currentPage}
        totalPages={Math.ceil(selectedEvents.length / eventsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default SelectedEvents;
