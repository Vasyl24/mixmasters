import { NavLink } from "react-router-dom";
import {
    Wrapper,
    Title,
    List,
    Image,
    TextWrapper,
    Subtitle,
    Text
} from 'components/PopularDrinks/PopularDrinks.styled'


export const PopularDrinks = () => {
    return (
    <Wrapper>
            <Title>Popular drinks</Title>
            <List>
                <li>
                    <NavLink>
                        <Image
                            // src=""
                            // alt="popular thumb"
						    width={90}
                            height={90}
                        />
                        <TextWrapper>
                            <Subtitle></Subtitle>
                            <Text></Text>
                        </TextWrapper>
                    </NavLink>
                </li>
            </List>
    </Wrapper>
    )
}
