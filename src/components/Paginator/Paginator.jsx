import React, { useState, useEffect } from 'react';
import { StyledArrows, StyledPagination } from './Paginator.module';
import sprite from 'assets/sprite.svg';
import { useWindowWidth } from 'hooks/useWindowWidth';

const Paginator = ({ page, setPage, restPages, totalPages }) => {
  const [pagesToShow, setPagesToShow] = useState(5);
  const windowWidth = useWindowWidth();

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= restPages) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    if (windowWidth > 0 && windowWidth < 768 && pagesToShow !== 5) {
      setPagesToShow(5);
    } else if (windowWidth >= 768 && pagesToShow !== 8) {
      setPagesToShow(8);
    }
  }, [windowWidth, pagesToShow]);

  const getVisiblePageNumbers = () => {
    // let visiblePages = Array.from({ length: pagesToShow }, (_, k) => k + 1);

    const min = page > pagesToShow ? page - pagesToShow + 1 : 1;
    const max = page < totalPages ? min + pagesToShow : totalPages + 1;
    console.log(min, max);

    let visiblePages = Array.from({ length: max - min }, (_, i) => i + min);

    return visiblePages;
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
