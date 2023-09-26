import SocialLinks from './SocialLinks/SocialLinks';
import { Nav } from './Nav/Nav';
import EmailSubscription from './EmailSubscription/EmailSubscription';
import React from 'react';
import Logo from '../../components/Logo/Logo';
import {
  FooterContainer,
  FlexContainer,
  FooterGroup,
  FooterInfo,
  FooterTextTop,
  FooterTextButton
} from './Footer.styled';

function Footer() {
  return (
    <>
      <FooterContainer>
        <FlexContainer>
          <FooterGroup>
            <div>
              <Logo />
              <SocialLinks />
            </div>
            <Nav />
          </FooterGroup>
          <EmailSubscription />
        </FlexContainer>
        <FooterInfo className="FooterInfo">
          <FooterTextTop>©2023 Drink Master. All rights reserved.</FooterTextTop>
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
      </FooterContainer>
    </>
  );
}

export default Footer;
