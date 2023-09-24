import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0px auto;
  width: 335px;
  height: 193px;
  padding: 50px 25px;
  background-color: var(--accent-color);
  border-radius: 8px;
`;

export const Text = styled.p`
  margin-bottom: 25px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: none;
`;
export const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;
export const StyledCancelBtn = styled.button`
  padding: 12px 45px;

  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 42px;
  background-color: var(--hover-btn-color);
  color: var(--text-btn-color);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.28;
  outline: none;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--text-btn-color);
    color: var(--accent-color);
  }
`;
