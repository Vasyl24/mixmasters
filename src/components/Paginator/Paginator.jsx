import React, { useState } from 'react';
import { StyledArrows, StyledPagination } from './Paginator.module';
import sprite from 'assets/sprite.svg';

const Paginator = ({}) => {
  return (
    <StyledPagination>
      <ul>
        <StyledArrows type="button">
          <svg style={{ width: 14, height: 20, marginRight: 30 }}>
            <use href={sprite + '#icon-arrow-left'} />
          </svg>
        </StyledArrows>

        <StyledArrows>
          <svg style={{ width: 14, height: 20 }}>
            <use href={sprite + '#icon-arrow-right'} />
          </svg>
        </StyledArrows>
      </ul>
    </StyledPagination>
  );
};

export default Paginator;
