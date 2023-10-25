import React from 'react';
import Logo from '../Footer/LogoFooter/LogoFooter';
import { Nav } from './Nav/Nav';
import EmailSubscription from './EmailSubscription/EmailSubscription';
import {
  FooterContainer,
  FooterWrap,
  FlexContainer,
  FooterGroup,
  FooterInfo,
  FooterTextTop,
  FooterTextButton,
  FooterFirstBallContainer,
  FooterFirstBall,
  FooterSecondBall,
  FooterThirdBall,
  LogoContainer,
} from './Footer.styled';
import FooterSocialLinks from './FooterSocialLinks/FooterSocialLinks';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FlexContainer>
          <FooterGroup>
            <div>
              <LogoContainer>
                <Logo />
              </LogoContainer>
              <FooterSocialLinks />
            </div>
            <Nav />
          </FooterGroup>
          <EmailSubscription />
        </FlexContainer>
        <FooterInfo>
          <FooterTextTop>
            ©2023 Drink Master. All rights reserved.
          </FooterTextTop>
          <div style={{ display: 'flex' }}>
            <FooterTextButton>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/1Ck8e_RO-DLguG9DnIPeoUE5OkEReDhzwZ1ojE8Ygjy4/edit?usp=sharing"
              >
                Privacy Policy
              </a>
            </FooterTextButton>
            <FooterTextButton>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/1i_HoneWhEKvyjp5Vt2afM8NBNC-rWKcRs3OJQdX_f3U/edit?usp=sharing"
              >
                Terms of Service
              </a>
            </FooterTextButton>
          </div>
        </FooterInfo>
      </FooterWrap>
      <FooterFirstBallContainer>
        <FooterFirstBall />
      </FooterFirstBallContainer>
      <FooterSecondBall />
      <FooterThirdBall />
    </FooterContainer>
  );
}

export default Footer;
