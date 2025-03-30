import React from 'react';

function Pagination({ totalRows, rowsPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="pagination-container">
      <button
        className="first-page"
        onClick={() => handleClick(1)}
        disabled={currentPage === 1}
      >
        ⏪
      </button>

      <button
        className="previous-page"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ◀️
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          className={`page-number ${currentPage === page ? 'active' : ''}`}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="next-page"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ▶️
      </button>

      <button
        className="last-page"
        onClick={() => handleClick(totalPages)}
        disabled={currentPage === totalPages}
      >
        ⏩
      </button>
    </div>
  );
}

export default Pagination;
