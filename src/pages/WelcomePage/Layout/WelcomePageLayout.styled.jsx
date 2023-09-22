import styled, {keyframes} from 'styled-components';
import welcomesm1x from '../../../assets/welcomesm@1x.png';
import welcomesm2x from '../../../assets/welcomesm@2x.png';
import welcomemd1x from '../../../assets/welcomemd@1x.png';
import welcomemd2x from '../../../assets/welcomemd@2x.png';
import welcome1x from '../../../assets/welcome@1x.png';
import welcome2x from '../../../assets/welcome@2x.png';

export const ContainerLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-size: contain;
  justify-content: center;
  align-items: center;
  background-position: right;
  background-repeat: no-repeat;
  background-image: linear-gradient(
    to right,
    rgba(6, 6, 9, 1),
    rgba(10, 10, 17, 0)
  ),
  url(${welcomemd1x});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
      to right,
      rgba(6, 6, 9, 1),
      rgba(10, 10, 17, 0)
    ),
    url(${welcomemd2x});
    justify-content: left;
  }

  @media (max-width: 768px) {
    justify-content: left;
    padding-left: 64px;
    background-image: linear-gradient(
      to right,
      rgba(6, 6, 9, 1),
      rgba(10, 10, 17, 0)
    ),
    url(${welcomesm1x});
    
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
        to right,
        rgba(6, 6, 9, 1),
        rgba(10, 10, 17, 0)
      ),
      url(${welcomesm2x});
    }
  }

  @media (min-width: 1024px) {
    justify-content: left;
    background-image: linear-gradient(
      to right,
      rgba(6, 6, 9, 1),
      rgba(10, 10, 17, 0)
    ),
    url(${welcome1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
        to right,
        rgba(6, 6, 9, 1),
        rgba(10, 10, 17, 0)
      ),
      url(${welcome2x});
    }
  }
`;
const mainTitleAnimation = keyframes`
 0%,
 100% {
  transform: translateY(0) scale(1) rotate(0);
  opacity: 1;
 }
 25% {
  transform: translateY(-50px) scale(0.8) rotate(45deg);
  opacity: 0.5;
 }
 50% {
  transform: translateY(-100px) scale(0.6) rotate(90deg);
  opacity: 0.2;
 }
 75% {
  transform: translateY(-50px) scale(0.8) rotate(45deg);
  opacity: 0.5;
 }
}`

export const GradientContainer = styled.div`
    width: 50vw;
 height: 130vh;
 background: radial-gradient(ellipse, rgba(64, 112, 205, 0.5), transparent);
 top: -50%;
 left: -28%;
 z-index: 3;
 border-radius: 50%;
 position: absolute;
 filter: blur(50px);
 animation: ${mainTitleAnimation} 8s ease-in-out infinite;
`;

export const CircleContainer = styled.div`
    width: 32vw;
 height: 75vh;
 background: radial-gradient(circle, rgba(188, 230, 210, 0.4), transparent);
 filter: blur(40px);
 top: -35%;
 left: 10%;
 z-index: 10;
 border-radius: 50%;
 position: absolute;
 animation: ${mainTitleAnimation} 8s ease-in-out infinite 2s;;
`;

