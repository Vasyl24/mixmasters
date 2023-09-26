import styled from 'styled-components';
import { Field } from 'formik';


/////////////////////////////////////////////////////
export const Wrapper = styled.div`
margin-bottom: 80px
@media (min-width: 1028px) {
		width: 540px;
	}`;

export const CounterWrapper = styled.div`
display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 34px;`;

export const IngredientsText = styled.h3`
color: $mainFontColor;
	font-size: 28px;
	font-weight: 600;
	line-height: calc(32 / 28);

@media (min-width: 768px) {
		font-size: 40px;
		line-height: calc(44 / 40);
	}`;

export const IngredientsList = styled.ul`display: flex;
	flex-direction: column;
	gap: 18px;
  margin-bottom: 80px;

	 @media (min-width: 768px){
		gap: 24px;
	}`;

export const SelectWraper = styled.div`
display: flex;
	gap: 8px;

 @media (min-width: 768px){
		justify-content: space-between;
	}`;

export const FlexWraper = styled.div`display: flex;
	gap: 8px;
  align-items:center;

	@media (min-width: 768px) {
		gap: 14px;
	}`;

export const MeasureWraper = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
	width: 101px;
	height: 50px;
	background: transparent;
	border-radius: 200px;
	border: 1px solid rgba(243, 243, 243, 0.5);

	transition-property: border-color;
	transition-duration: 250ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

	@@media (min-width: 768px) {
		width: 150px;
		height: 56px;
	}

	&:hover,
	&:focus {
		border-color: #f3f3f3;
	}`;

export const FieldStyle = styled(Field)`
  width: 27px;
	margin-right: 5px;
	font-size: 14px;
	border: none;
	text-align: center;
	cursor: pointer;
	color: $mainFontColor;
	background-color: transparent;
	outline: none;
	font-size: 14px;
	line-height: calc(18 / 14);

	transition-property: border-color;
	transition-duration: 250ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

 @media (min-width: 768px) {
		width: 35px;
		margin-right: 15px;
		margin-top: 3px;
		font-size: 18px;
		line-height: calc(26 / 18);
	}

	&:hover,
	:focus {
		border-color: #f3f3f3;
	}

	// &::-webkit-outer-spin-button,
	// &::-webkit-inner-spin-button {
	// 	-webkit-appearance: none;
	// 	margin: 0;
	// }
  `;

export const DeleteBtn = styled.button`
 display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;`;

export const DeleteIcon = styled.svg`
 stroke: #f3f3f3;
	width: 18px;
	height: 18px;
  
	transition-property: border, stroke, border-radius;
	transition-duration: 250ms;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

 @media (min-width: 768px) {
		width: 20px;
		height: 20px;
	}

	&:hover,
	:focus {
		stroke: rgba(243, 243, 243, 0.4);
		border: 1px solid #434d67;
		border-radius: 50%;
	}`;