import { useNavigate } from "react-router-dom";
import { StyledAddDrinksBtn } from './AddDrinksBtn.styled'


export const AddDrinksBtn = () => {
    const navigate = useNavigate();

    return (
        <StyledAddDrinksBtn
            onClick={() => {
                navigate('');
            }}
            >
            Add drinks
        </StyledAddDrinksBtn>
    )
}

// '' - маршрут
//Add drink, по кліку на яке користувач має бути переадресований на сторінку 
//cтворення власних коктейлів - AddDrinkPage