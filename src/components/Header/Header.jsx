import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, HeaderWrapper } from './Header.styled';
import Logo from '../Logo/Logo';
import Toggle from '../../components/ThemeToggler/ThemeToggler';
import Navigation from './Navigation/Navigation';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { UserLogo } from 'components/UserLogo/UserLogo';

function AppHeader() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpenBurgerMenu(prevIsOpen => !prevIsOpen);
  };

  const updateMedia = useCallback(() => {
    setIsDesktop(window.innerWidth >= 1440);
    if (isDesktop) {
      setIsOpenBurgerMenu(false);
    }
  }, [isDesktop]);

  useEffect(() => {
    window.addEventListener('resize', updateMedia);

    return () => {
      window.removeEventListener('resize', updateMedia);
    };
  }, [updateMedia]);

  useEffect(() => {
    if (isOpenBurgerMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpenBurgerMenu]);

  useEffect(() => {
    setIsOpenBurgerMenu(false);
  }, [location.pathname]);

  return (
    <>
      <Header>
        <HeaderWrapper>
          <Logo />
          {isDesktop && <Navigation />}
          {(isDesktop || isOpenBurgerMenu) && <Toggle />}
          {!isOpenBurgerMenu && <UserLogo />}
          <BurgerMenu
            toggleMenu={toggleMenu}
            isOpenBurgerMenu={isOpenBurgerMenu}
            isDesktop={isDesktop}
          />
        </HeaderWrapper>
      </Header>
    </>
  );
}

export default AppHeader;
