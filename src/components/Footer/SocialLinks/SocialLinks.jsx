import React from "react";
import icons from "../../../assets/sprite.svg";
import { Container, SocialLinksIcon, IconContainer } from "./SocialLinks.styled";


const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/goITclub/",
    iconId: "icon-facebook",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/cocktailbox_ua/?igshid=d3cupeo5kedw",
    iconId: "icon-instagram",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/watch?v=5McPd0GPqC8&ab_channel=CocktailBox",
    iconId: "icon-youtube",
  },
];

const SocialLinks = () => {
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

export default SocialLinks;

