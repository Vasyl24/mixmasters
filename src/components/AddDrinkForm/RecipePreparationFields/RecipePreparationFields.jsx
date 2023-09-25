import {
    RecipeText,
    TextareaStyle,
    Validate,
    Wrapper
} from './RecipePreparationFields.styled'

export default function RecipePreparationFields({ name }) {
    return (

        <Wrapper>
            <RecipeText>Recipe Preparation</RecipeText>
            <TextareaStyle
                as="textarea"
                type="text"
                name={name}
                placeholder="Enter the recipe"
                rows="8"
            />
            <Validate></Validate>
        </Wrapper>
        	);
}