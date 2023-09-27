import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  position: relative;
  margin: 0px auto;
  width: 335px;
  height: 345px;
  padding: 50px 25px;
  background-color: var(--accent-color);
  border-radius: 8px;
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

export const AvatarWrap = styled.div`
  position: relative;
  margin-bottom: 39px;
`;
export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0px auto;
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
export const StyledField = styled(Field)`
  margin-bottom: 18px;
  width: 285px;
  padding: 18px 24px;
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  color: var(--text-btn-color);
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

  &:hover {
    background: var(--hover-btn-color);
    color: var(--text-btn-color);
  }
`;
