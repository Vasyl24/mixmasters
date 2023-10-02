import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(-200%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* min-width: 40px;
  height: 20px; */
  margin-left: auto;
  padding: 1px;
  border-radius: 10px;
  border: 1px solid var(--background-color);
  background-color: var(--text-btn-color);
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1) inset;
  animation: ${props => (props.closing ? slideOut : slideIn)} 0.8s
    cubic-bezier(0.42, 0, 0.58, 1) forwards; */
`;
export const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--accent-color);
`;

export const Label = styled.label``;
export const Input = styled.input`
  position: absolute;
  opacity: 0;
  width: 0px;
  height: 0px;
  appearance: none;
`;

// export const input:checked + circle `
// background-color: var(--background-color);
// `;
