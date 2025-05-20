import React from 'react';
import "../../styles/Paging.css";

const Paging = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="paging">
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>
          Prev
        </button>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
        (pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={currentPage === pageNumber ? 'active' : ''}
          >
            {pageNumber}
          </button>
        )
      )}

      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Paging;