import {
  RecipeText,
  TextareaStyle,
  // Validate,
  Wrapper,
} from './RecipePreparationFields.styled';

export default function RecipePreparationFields({ values, setFieldValue }) {
  const handleTextInput = evt => {
    setFieldValue('instructions', evt.target.value);
  };

  return (
    <Wrapper>
      <RecipeText>Recipe Preparation</RecipeText>
      <TextareaStyle
        as="textarea"
        type="text"
        name="instructions"
        placeholder="Enter the recipe"
        rows="8"
        onChange={handleTextInput}
      />
      {/* <Validate></Validate> */}
    </Wrapper>
  );
}
