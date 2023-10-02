import React from 'react';
import { ToggleContainer, Circle, Input, Label } from './ThemeToggler.styled';

export default function ThemeToggler() {
  return (
    <ToggleContainer>
      {/* <Label for={'checkbox'}>
            <Input type={'checkbox'} id='checkbox'/>
        </Label>
            <Circle /> */}
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
