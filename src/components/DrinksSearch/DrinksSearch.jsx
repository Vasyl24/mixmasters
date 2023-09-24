import {
  StyledFilterContainer,
  StyledSelectInput,
  StyledTextInput,
} from './DrinksSearch.styled';

export const DrinksSearch = ({
  onSearch,
  onCategoryChange,
  onIngredientChange,
}) => {
  return (
    <StyledFilterContainer>
      <StyledTextInput
        type="text"
        placeholder="Enter the text"
        onChange={e => onSearch(e.target.value)}
      />
      <StyledSelectInput onChange={e => onCategoryChange(e.target.value)}>
        <option value="">All categories</option>
        <option value="Ordinary Drink">Ordinary drink</option>
        <option value="Snake">Snake</option>
        <option value="Other/Unknow">Other/Unknow</option>
        <option value="Cocoa">Cocoa</option>
        <option value="Shot">Shot</option>
        <option value="Coffee / Tea">Coffee/Tea</option>
        <option value="Homemade Liqueur">Homemade Liqueur</option>
        <option value="Punch / Party Drink">Punch / Party Drink</option>
        <option value="Beer">Beer</option>
        <option value="Soft Drink">Soft Drink</option>
      </StyledSelectInput>
      <StyledSelectInput onChange={e => onIngredientChange(e.target.value)}>
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
