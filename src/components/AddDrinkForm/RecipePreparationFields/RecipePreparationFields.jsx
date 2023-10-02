import {
  RecipeText,
  TextareaStyle,
  Validate,
  Wrapper,
} from './RecipePreparationFields.styled';

export default function RecipePreparationFields({ instructions }) {
  return (
    <Wrapper>
      <RecipeText>Recipe Preparation</RecipeText>
      <TextareaStyle
        as="textarea"
        type="text"
        name={instructions}
        placeholder="Enter the recipe"
        rows="8"
      />
      <Validate></Validate>
    </Wrapper>
  );
}
