import React, { useState } from 'react';
import { StyledPagination } from './Paginator.module';
import sprite from 'assets/sprite.svg';

const Paginator = ({
  drinksPerPage,
  totalDrinks,
  onPageChange,
  pageNumbersToShow,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalDrinks / drinksPerPage); i++) {
    pageNumbers.push(i);
  }

  const getVisiblePageNumbers = () => {
    const halfPageNumbersToShow = Math.floor(pageNumbersToShow / 2);
    const currentPageIndex = pageNumbers.indexOf(currentPage);

    let start = currentPageIndex - halfPageNumbersToShow;
    let end = currentPageIndex + halfPageNumbersToShow;

    if (start < 0) {
      start = 0;
      end = pageNumbersToShow - 1;
    }

    if (end >= pageNumbers.length) {
      end = pageNumbers.length - 1;
      start = end - (pageNumbersToShow - 1);
    }

    return pageNumbers.slice(start, end + 1);
  };

  return (
    <StyledPagination>
      <ul>
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          style={{ display: currentPage === 1 ? 'none' : 'block' }}
        >
          <svg style={{ width: 14, height: 20, marginRight: 30 }}>
            <use href={sprite + '#icon-arrow-left'} />
          </svg>
        </button>
        {getVisiblePageNumbers().map(number => (
          <li key={number}>
            <button
              onClick={() => handlePageChange(number)}
              className={number === currentPage ? 'active' : ''}
            >
              {number}
            </button>
          </li>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          style={{
            display:
              currentPage === Math.ceil(totalDrinks / drinksPerPage)
                ? 'none'
                : 'block',
          }}
        >
          <svg style={{ width: 14, height: 20, marginLeft: 30 }}>
            <use href={sprite + '#icon-arrow-right'} />
          </svg>
        </button>
      </ul>
    </StyledPagination>
  );
};

export default Paginator;
