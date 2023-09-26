import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
	gap: 28px;
	flex-direction: column;

	@media (min-width: 1028px){
		gap: 40px;
		width: 313px;
	} 
`;

export const Title = styled.h3`
    color: #f3f3f3;
	font-size: 18px;
	font-weight: 500;
	line-height: calc(24 / 18);
    margin-top: 88px;

	@media (min-width: 768px)  {
		font-size: 24px;
		line-height: calc(32 / 24);
	} 
`;

export const List = styled.ul`
    display: flex;
	flex-direction: column;
	gap: 24px;

	@media (min-width: 768px) and (max-width: 1279.9px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px;
	}
`;

export const NavLink = styled.link`
   display: flex;
	gap: 14px;
	border-right: 1px solid transparent;

	transition-property: border-color;
	transition-duration: 250ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

	@media (min-width: 1028px) {
		width: 100%;
	}

	&:hover,
	:focus {
		border-color: #f3f3f3;
	}
`;

export const Image = styled.img`
    width: 90px;
	height: 90px;
	border-radius: 8px;
`;

export const TextWrapper = styled.div`
    display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Subtitle = styled.p`
    color: $mainFontColor;
	font-size: 16px;
	font-weight: 500;
	line-height: calc(22 / 16);
`;

export const Text = styled.p`
    color: rgba(243, 243, 243, 0.5);
	text-overflow: ellipsis;
	font-size: 14px;
	line-height: calc(18 / 14);
	height: 55px;
	overflow: hidden;

	 @media (min-width: 768px){
		line-height: calc(20 / 14);
	}
`;



