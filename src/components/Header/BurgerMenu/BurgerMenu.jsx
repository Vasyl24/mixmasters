import React, { useEffect } from 'react';
import icons from '../../../assets/sprite.svg';
import { IconWrapper, Icon } from './BurgerMenu.styled';
import Navigation from '../Navigation/Navigation';
import PropTypes from 'prop-types';
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default function BurgerMenu({
  toggleMenu,
  isOpenBurgerMenu,
  isDesktop,
}) {
  useEffect(() => {
    const body = document.querySelector('body');

    if (isOpenBurgerMenu && !isDesktop) {
      // Заблокувати скролл
      disableBodyScroll(body);
    } else {
      // Розблокувати скролл
      enableBodyScroll(body);
    }

    return () => {
      // Прибрати слухача після відмонтування компонента
      clearAllBodyScrollLocks();
    };
  }, [isOpenBurgerMenu, isDesktop]);

  return (
    <>
      <IconWrapper onClick={toggleMenu} id="burger_menu">
        <Icon className="icon">
          {isOpenBurgerMenu ? (
            <svg>
              <use xlinkHref={`${icons}#burger-close`} />
            </svg>
          ) : (
            <svg>
              <use xlinkHref={`${icons}#icon-burger`} />
            </svg>
          )}
        </Icon>
      </IconWrapper>

      {isOpenBurgerMenu && !isDesktop && <Navigation />}
    </>
  );
}

BurgerMenu.propTypes = {
  toggleMenu: PropTypes.func,
  isOpenBurgerMenu: PropTypes.bool,
  isDesktop: PropTypes.bool,
};
