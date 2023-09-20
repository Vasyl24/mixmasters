import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from '../../assets/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/signup">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Start
        </StyledLink>
        <StyledLink to="/mainpage">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Main
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
