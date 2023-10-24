import styled from 'styled-components';
import icons from '../../../assets/sprite.svg';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    iconId: 'icon-facebook',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    iconId: 'icon-instagram',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/',
    iconId: 'icon-youtube',
  },
];

// Styled Container
export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 16px;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 40px;
    gap: 16px;
  }
`;

// Styled SocialLinksIcon
export const SocialLinksIcon = styled.svg`
  width: 22px;
  height: 22px;
  display: flex;
  fill: #f3f3f3;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

// Styled IconContainer
export const IconContainer = styled.a`
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 10px;
  padding: 8px;
  transition: border 0.3s ease;

  &:hover {
    border: 1px solid #f3f3f3;
  }
`;

export const SocialLinks = () => {
  return (
    <Container>
      {socialLinks.map((link, index) => (
        <IconContainer
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialLinksIcon>
            <use xlinkHref={`${icons}#${link.iconId}`}></use>
          </SocialLinksIcon>
        </IconContainer>
      ))}
    </Container>
  );
};
