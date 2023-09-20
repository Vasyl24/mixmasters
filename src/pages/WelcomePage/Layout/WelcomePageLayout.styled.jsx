import styled from 'styled-components';
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

  @media (max-width: 768px) {
    justify-content: left;
    padding-left: 64px;
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
    }
  }

  @media (min-width: 1024px) {
    justify-content: left;
    padding-left: 100px;
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


