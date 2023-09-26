import styled, { keyframes } from 'styled-components';

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
`;

export const ContainerLayout = styled.div`
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
  );
`;

export const GradientContainer = styled.div`
  width: 50vw;
  height: 130vh;
  background: radial-gradient(ellipse, rgba(64, 112, 205, 0.5), transparent);
  top: -50%;
  left: -28%;
  z-index: 309;
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
  z-index: 310;
  border-radius: 50%;
  position: absolute;
  animation: ${mainTitleAnimation} 8s ease-in-out infinite 2s;
`;

export const GradientContainerRight = styled.div`
  width: 32vw;
  height: 75vh;
  background: radial-gradient(circle, rgba(64, 112, 205, 0.5), transparent);
  filter: blur(50px);
  bottom: -60%;
  right: -40%;
  z-index: 10;
  border-radius: 50%;
  position: absolute;
  animation: ${mainTitleAnimation} 8s ease-in-out infinite 2s;
`;
