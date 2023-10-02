import React from 'react';
import { Circle, Input, Label, ToggleContainer } from './ThemeToggler.styled';
// import { ToggleContainer } from './ThemeToggler.styled';
//import { Toggle } from 'hellaui';

export default function ThemeToggler() {
  // const [isChecked, setIsChecked] = useState(false);
  // let position = 'right';
  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
    // position = 'right';
    localStorage.setItem('selectedTheme', 'dark');
  };
  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
    // position = 'left';
    localStorage.setItem('selectedTheme', 'light');
  };
  const selectedTheme = localStorage.getItem('selectedTheme');

  if (selectedTheme === 'dark') {
    setDarkMode();
  } else {
    setLightMode();
  }

  // const toggleTheme = e => {
  //   if (e.target.checked) setDarkMode();
  //   else setLightMode();
  // };

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
