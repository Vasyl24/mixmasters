import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
  width: 177px;
  height: 134px;
  padding: 18px;
  background-color: var(--accent-color);
  border-radius: 8px;
`;
export const EditProfileWrap = styled.div`
  margin-bottom: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
`;

export const Icon = styled.svg`
  width: 14px;
  height: 14px;
`;
export const Button = styled.button``;
