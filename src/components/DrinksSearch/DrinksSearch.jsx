import { StyledFilterContainer, StyledSelectInput, StyledTextInput } from './DrinksSearch.styled';

export const DrinksSearh = () => {

  return (
    <StyledFilterContainer>
      <StyledTextInput type="text" placeholder="Enter the text" />
      <StyledSelectInput>
        <option value="">All categories</option>
        <option value="ordinary drink">Ordinary drink</option>
        <option value="snake">Snake</option>
        <option value="other/Unknow">Other/Unknow</option>
        <option value="cocoa">Cocoa</option>
        <option value="shot">Shot</option>
        <option value="coffee/Tea">Coffee/Tea</option>
        <option value="homemade Liqueur">Homemade Liqueur</option>
        <option value="punch / Party Drink">Punch / Party Drink</option>
        <option value="beer">Beer</option>
        <option value="Soft Drink">Soft Drink</option>
      </StyledSelectInput>
      <StyledSelectInput>
        <option value="">Ingredients</option>
        <option value="Light rum">Light rum</option>
        <option value="Applejack">Applejack</option>
        <option value="Gin">Gin</option>
        <option value="Dark rum">Dark rum</option>
        <option value=" Sweet Vermouth">Sweet Vermouth</option>
        <option value="Strawberry">Strawberry</option>
        <option value="Scotch">Scotch</option>
        <option value="Apricot brandy">Apricot brandy</option>
      </StyledSelectInput>
    </StyledFilterContainer>
  );
};
