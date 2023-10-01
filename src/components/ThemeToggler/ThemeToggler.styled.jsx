import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 40px;
  height: 20px;
  margin-left: auto;
  margin-right: 28px;
  padding: 1px;
  border-radius: 10px;
  border: 1px solid var(--background-color);
  background-color: var(--text-btn-color);
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.1) inset;
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
