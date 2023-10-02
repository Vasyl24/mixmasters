import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ModalStyles = {
  top: '-50%',
  borderRadius: '8px',
  padding: '50px',
  backgroundColor: 'var(--accent-color)',
};
export const BackdropStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
};

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: none;
  @media screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  }
`;
export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const AvatarWrap = styled.div`
  position: relative;
  margin-bottom: 39px;
  @media screen and (min-width: 768px) {
    margin-bottom: 66px;
  }
`;
export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0px auto;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
export const AddButton = styled.button`
  position: absolute;
  bottom: -14px;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  border: none;
`;
export const InputFile = styled(Field)`
  cursor: pointer;
  margin: 0px auto 10px;
`;
export const StyledForm = styled(Form)`
  position: relative;
`;
export const StyledField = styled(Field)`
  margin-bottom: 18px;
  width: 285px;
  padding: 18px 24px;
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  color: var(--text-btn-color);
  font-size: 14px;
  line-height: 1.28;
  @media screen and (min-width: 768px) {
    width: 400px;
    margin-bottom: 25px;
    padding: 14px 24px;
    font-size: 17px;
    line-height: 1.5;
  }
`;

export const IconEdit = styled.svg`
  position: absolute;
  right: 18px;
  top: 18px;
  width: 16px;
  height: 16px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const StyledBtn = styled.button`
  width: 285px;
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: var(--text-btn-color);
  padding: 18px 0px;
  color: var(--accent-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  outline: none;
  transition: 0.3s ease;
  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 18px;
    font-size: 17px;
    line-height: 1.5;
  }

  &:hover {
    background: var(--hover-btn-color);
    color: var(--text-btn-color);
  }
`;
