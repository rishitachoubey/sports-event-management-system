import React from 'react';
import './PaginationControl.scss';

const PaginationControl = ({ currentPage, totalPages, onPageChange }) => {
  // Create an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-control">
      {pageNumbers.map(number => (
        <button
          key={number}
          className={`page-button ${currentPage === number ? 'active' : ''}`}
          onClick={() => onPageChange(number)}
          disabled={currentPage === number}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default PaginationControl;
