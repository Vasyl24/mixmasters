import { styled } from 'styled-components';

export const StyledLogoutBtn = styled.button`
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: #f3f3f3;
  display: flex;
  padding: 12px 45px;
  align-items: center;
  color: #161f37;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #434d67;
    color: #f3f3f3;
  }
`;
