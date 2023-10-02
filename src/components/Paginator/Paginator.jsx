import React from 'react';
import { StyledArrows, StyledPagination } from './Paginator.module';
import sprite from 'assets/sprite.svg';
import { useDispatch } from 'react-redux';
import { fetchAllDrinks } from 'redux/drinks/drinksOperations';

const Paginator = ({ page, limit, drinks, count, onPageChange }) => {
  const dispatch = useDispatch();

  const totalPages = Math.ceil(count / limit);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(fetchAllDrinks({ page: newPage, limit }));
    }
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
          {pageNumbers.map((number, index) => (
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
