import React from 'react';
import { StyledArrows, StyledPagination } from './Paginator.module';
import sprite from 'assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { setPageValue } from 'redux/drinks/drinksOperations';

const Paginator = ({ page, limit, count, pageNumbersToShow }) => {
  const dispatch = useDispatch();

  const totalPages = Math.ceil(count / limit);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setPageValue(newPage));
    }
  };

  const getVisiblePageNumbers = () => {
    const halfPageNumbersToShow = Math.floor(pageNumbersToShow / 2);
    const currentPageIndex = pageNumbers.indexOf(page);

    const start = Math.max(0, currentPageIndex - halfPageNumbersToShow);
    const end = Math.min(pageNumbers.length - 1, start + pageNumbersToShow - 1);

    return pageNumbers.slice(start, end + 1);
  };

  return (
    <StyledPagination>
      <ul>
        <StyledArrows
          type="button"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          <svg style={{ width: 14, height: 20, marginRight: 30 }}>
            <use href={sprite + '#icon-arrow-left'} />
          </svg>
        </StyledArrows>
        <ul>
          {getVisiblePageNumbers().map((number, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(number)}
              className={number === page ? 'active' : ''}
            >
              <li key={index} onClick={() => handlePageChange(number)}>
                {number}
              </li>
            </button>
          ))}
        </ul>
        <StyledArrows
          type="button"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          <svg style={{ width: 14, height: 20 }}>
            <use href={sprite + '#icon-arrow-right'} />
          </svg>
        </StyledArrows>
      </ul>
    </StyledPagination>
  );
};

export default Paginator;
