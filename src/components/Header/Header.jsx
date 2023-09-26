import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, HeaderWrapper } from './Header.styled';
import Logo from '../../components/Logo/Logo';
import Navigation from './Navigation/Navigation';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { UserLogo } from 'components/UserLogo/UserLogo';

function AppHeader() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    if (!isOpenBurgerMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    setIsOpenBurgerMenu(!isOpenBurgerMenu);
  };

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 1440);
    if (isDesktop) {
      setIsOpenBurgerMenu(false);
    }
  };

  const handleBackdropClicks = e => {
    const backdrop =
      e.target.closest('#burger_menu') === null &&
      e.target.closest('#navigation') === null;
    if (backdrop) {
      setIsOpenBurgerMenu(false);
    }
  };

  const handleEscClick = e => {
    const target = e.key === 'Escape';
    if (target) {
      setIsOpenBurgerMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    if (isOpenBurgerMenu) {
      window.addEventListener('click', handleBackdropClicks);
      window.addEventListener('keydown', handleEscClick);
    }

    return () => {
      window.removeEventListener('resize', updateMedia);
      window.removeEventListener('click', handleBackdropClicks);
      window.removeEventListener('keydown', handleEscClick);
    };
  });

  useEffect(() => {
    setIsOpenBurgerMenu(false);
  }, [location.pathname]);

  return (
    <>
      <Header>
        <HeaderWrapper>
          <Logo />
          {isDesktop && <Navigation />}
          <UserLogo />
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
