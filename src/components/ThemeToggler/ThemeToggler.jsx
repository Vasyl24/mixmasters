import React, { useState, useEffect } from 'react';
import {
  ToggleContainer,
  ToggleLabel,
  ToggleInputChecked,
  Slider,
} from './ThemeToggler.styled';

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme === 'dark') {
      setIsDarkMode(true);
      document.querySelector('body').setAttribute('data-theme', 'dark');
    } else if (selectedTheme === 'light') {
      setIsDarkMode(false);
      document.querySelector('body').setAttribute('data-theme', 'light');
    } else {
      setIsDarkMode(false);
      document.querySelector('body').setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.querySelector('body').setAttribute('data-theme', newTheme);
    localStorage.setItem('selectedTheme', newTheme);
  };

  return (
    <ToggleContainer>
      <ToggleLabel className="toggle-label">
        <ToggleInputChecked
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <Slider className="slider" />
      </ToggleLabel>
    </ToggleContainer>
  );
};

export default Toggle;
