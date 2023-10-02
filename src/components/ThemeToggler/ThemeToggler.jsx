import React from 'react';
import { Circle, Input, Label, ToggleContainer } from './ThemeToggler.styled';
// import { ToggleContainer } from './ThemeToggler.styled';

export default function ThemeToggler() {
  return (
    <ToggleContainer>
      <Label>
        <Input type={'checkbox'} id="checkbox" />
      </Label>
      <Circle />
    </ToggleContainer>
  );
}

// import { useState, useLayoutEffect } from "react";

// export const useTheme = () => {
//     const [theme, setTheme] = useState('light');

//     useLayoutEffect(() => {
//         return document.documentElement.setAttribute['data-theme']
//     }, [theme])

//     return { theme, setTheme }
// }
