import { ChevronsLeft, ChevronsRight, MoveLeft, MoveRight } from 'lucide-react';
import React from 'react';
import PaginationFloatingButton from '../Button/PaginationFloatingButton';

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

          <PaginationFloatingButton
           className={"first-page"}
           onClick={handleClick}
           ariaLabel={'first-page'}
           disabled={currentPage === 1}
           onClickParams={1}
          >
           <ChevronsLeft size={'20px'} color={'#000000'}/>
          </PaginationFloatingButton>

      {/* <button
        className="first-page"
        onClick={() => handleClick(1)}
        disabled={currentPage === 1}
      >
        ⏪
      </button> */}

        <PaginationFloatingButton
           className={"previous-page"}
           onClick={handleClick}
           ariaLabel={'previous-page'}
           disabled={currentPage === 1}
           onClickParams={currentPage - 1}
          >
           <MoveLeft size={'20px'} color={'#000000'}/>
          </PaginationFloatingButton>

      {/* <button
        className="previous-page"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ◀️
      </button> */}

      {getPageNumbers().map((page) => (

        <PaginationFloatingButton
        className={`page-number ${currentPage === page ? 'active' : ''}`}
        onClick={handleClick}
        ariaLabel={"navigation-btns"}
        disabled={currentPage === totalPages}
        onClickParams={page}
        key={page}
        >
       {page}
        </PaginationFloatingButton>
        
        // <button
        //   key={page}
        //   className={`page-number ${currentPage === page ? 'active' : ''}`}
        //   onClick={() => handleClick(page)}
        // >
        //   {page}
        // </button>
      ))}

        <PaginationFloatingButton
           className={"next-page"}
           onClick={handleClick}
           ariaLabel={"next-page"}
           disabled={currentPage === totalPages}
           onClickParams={currentPage + 1}
          >
           <MoveRight size={'20px'} color={'#000000'}/>
          </PaginationFloatingButton>

        <PaginationFloatingButton
          className={"last-page"}
          onClick={handleClick}
          ariaLabel={"last-page"}
          disabled={currentPage === totalPages}
          onClickParams={totalPages}
        >
          <ChevronsRight size={'20px'} color={'#000000'}/>
        </PaginationFloatingButton>
    </div>
  );
}

export default Pagination;
