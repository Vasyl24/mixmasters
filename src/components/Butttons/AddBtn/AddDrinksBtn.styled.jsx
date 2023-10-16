import { styled } from 'styled-components';

export const StyledAddDrinksBtn = styled.button`
 padding: 14px 40px;
  font-size: 14px;
  line-height: calc(18 / 16);
  font-weight: 600;
  background: var(--btn-color);
  color: var(--text-btn-color);
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  cursor: pointer;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
  }

  @media screen and (max-width: 1439.98px){
    margin-bottom: 80px;
  }

  &:hover {
    background: var(--text-btn-color);
    color: var(--btn-color);
  }
  }
`;
