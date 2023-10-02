import React, { useState } from 'react';
import { StyledArrows, StyledPagination } from './MyPaginator.styled';
import sprite from 'assets/sprite.svg';

const MyPaginator = ({
  drinksPerPage,
  totalDrinks,
  onPageChange,
  pageNumbersToShow,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalDrinks / drinksPerPage); i++) {
    pageNumbers.push(i);
  }

  const getVisiblePageNumbers = () => {
    const halfPageNumbersToShow = Math.floor(pageNumbersToShow / 2);
    const currentPageIndex = pageNumbers.indexOf(currentPage);

    const start = Math.max(0, currentPageIndex - halfPageNumbersToShow);
    const end = Math.min(pageNumbers.length - 1, start + pageNumbersToShow - 1);

    return pageNumbers.slice(start, end + 1);
  };

  return (
    <StyledPagination>
      <ul>
        <StyledArrows
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg style={{ width: 14, height: 20, marginRight: 30 }}>
            <use href={sprite + '#icon-arrow-left'} />
          </svg>
        </StyledArrows>
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
        <StyledArrows
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalDrinks / drinksPerPage)}
        >
          <svg style={{ width: 14, height: 20 }}>
            <use href={sprite + '#icon-arrow-right'} />
          </svg>
        </StyledArrows>
      </ul>
    </StyledPagination>
  );
};

export default MyPaginator;
