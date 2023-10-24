import styled, { keyframes } from 'styled-components';

// Create a container for the footer
export const FooterContainer = styled.footer`
  border-top: 1px solid rgba(243, 243, 243, 0.2);
  background: #0a0a11;
`;

export const LogoContainer = styled.div`
  color: white;
`;
export const FooterWrap = styled.div`
  padding: 40px 20px 18px;

  @media (min-width: 768px) {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
    padding: 80px 32px 24px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 80px 100px 24px;
  }
`;

// Create a flex container
export const FlexContainer = styled.div`
  position: relative;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  z-index: 12;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const FooterGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin-bottom: 0px;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    column-gap: 419px;
  }
`;

export const FooterInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  z-index: 12;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterTextTop = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: #f3f3f37e;
  transition: border 0.3s ease;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }
`;

export const FooterTextButton = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: #f3f3f37e;
  transition: border 0.3s ease;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  &:not(:last-child) {
    margin-right: 14px;

    @media (min-width: 768px) {
      margin-right: 18px;
    }
  }
`;

// Keyframes animation
const footerAnimation = keyframes`
  0%, 100% {
    opacity: 0; /* Початковий та кінцевий стани: елемент невидимий */
  }
  50% {
    opacity: 1; /* Середина анімації: елемент видимий */
  }
`;

// Styled components for footer balls

export const FooterFirstBallContainer = styled.div`
  position: absolute;
  overflow: hidden;
`;

export const FooterFirstBall = styled.div`
  position: absolute;
  bottom: 0;
  left: -689px;
  width: 784px;
  height: 649px;
  border-radius: 849px;
  background: rgba(64, 112, 205, 1);
  filter: blur(104.8543701171875px);
  animation: ${footerAnimation} 7s ease-in-out infinite 3s;

  @media (max-width: 768px) {
    left: -690px;
  }
`;

export const FooterSecondBall = styled.div`
  position: absolute;
  width: 700px;
  height: 320px;
  border-radius: 350px 350px 0 0;
  background: rgba(188, 230, 210, 1);
  filter: blur(104.8543701171875px);
  animation: ${footerAnimation} 8s ease-in-out infinite;
  z-index: 11;
   transform: translateY(-320px); 

   @media (max-width: 768px) {
     left: 0px;
     width: 300px;
     height: 150px;
     transform: translateY(-105px);
 }

 @media (min-width: 768px) {
     left: 0px;

     @media (min-width: 1440px) {
    left: 0px;
  

 }
`;

export const FooterThirdBall = styled.div`
  position: absolute;
  width: 700px;
  height: 320px;
  border-radius: 350px 350px 0 0;
  background: rgba(64, 112, 205, 1);
  filter: blur(104.8543701171875px);
  animation: ${footerAnimation} 8s ease-in-out infinite 2s;
  z-index: 11;
   transform: translateY(-320px);
   
   @media (max-width: 768px) {
     right: 0px;
     width: 300px;
  height: 150px;
     transform: translateY(-105px);
 } 
 @media (min-width: 768px) {
     right: 0px;
    
 }

 @media (min-width: 1440px) {
  right: 0px;
  
`;
