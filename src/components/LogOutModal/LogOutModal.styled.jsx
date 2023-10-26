import styled from 'styled-components';
export const ModalStyles = {
  borderRadius: '8px',
  padding: '50px',
  backgroundColor: 'var(--btn-background-color)',
};
export const BackdropStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
};

export const Text = styled.p`
  margin-bottom: 25px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.28px;
  color: #f3f3f3;
  @media screen and (min-width: 768px) {
    margin-bottom: 37px;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.36px;
  }
  @media screen and (min-width: 1440px) {
  }
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
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
export const StyledCancelBtn = styled.button`
  padding: 12px 45px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 42px;
  background-color: #434d67;
  color: #f3f3f3;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.28;
  outline: none;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #f3f3f3;
    color: #434d67;
  }
  @media screen and (min-width: 768px) {
    padding: 18px 69px;
    font-size: 16px;
    line-height: 1.12;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const StyledLogoutBtn = styled.button`
  padding: 12px 45px;
  background-color: #f3f3f3;
  color: #161f37;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 42px;
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
  @media screen and (min-width: 768px) {
    padding: 18px 69px;
    font-size: 16px;
    line-height: 1.12;
  }
  @media screen and (min-width: 1440px) {
  }
`;
