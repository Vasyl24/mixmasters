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
  FooterText,
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
          <FooterText>©2023 Drink Master. All rights reserved.</FooterText>
          <div style={{ display: 'flex' }}>
            <FooterText>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/1Ck8e_RO-DLguG9DnIPeoUE5OkEReDhzwZ1ojE8Ygjy4/edit?usp=sharing"
              >
                Privacy Policy
              </a>
            </FooterText>
            <FooterText>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/1i_HoneWhEKvyjp5Vt2afM8NBNC-rWKcRs3OJQdX_f3U/edit?usp=sharing"
              >
                Terms of Service
              </a>
            </FooterText>
          </div>
        </FooterInfo>
      </FooterContainer>
    </>
  );
}

export default Footer;
