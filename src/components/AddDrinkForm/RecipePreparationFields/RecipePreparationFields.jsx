import {
  RecipeText,
  TextareaContainer,
  TextareaStyle,
  Validate,
  Wrapper,
} from './RecipePreparationFields.styled';
import { ErrorMessage } from 'formik';

export default function RecipePreparationFields({
  setFieldValue,
  touched,
  errors,
}) {
  const handleTextInput = evt => {
    setFieldValue('instructions', evt.target.value);
  };

  return (
    <Wrapper>
      <RecipeText>Recipe Preparation</RecipeText>

      <TextareaContainer>
        <TextareaStyle
          as="textarea"
          type="text"
          name="instructions"
          placeholder="Enter the recipe"
          rows="8"
          onChange={handleTextInput}
          // border={
          //   touched.drink &&
          //   (errors.drink
          //     ? '1px solid #da1414'
          //     : '1px solid rgba(243, 243, 243, 0.5)')
          // }
        />

        <ErrorMessage name="instructions" component={Validate} />
      </TextareaContainer>
    </Wrapper>
  );
}
