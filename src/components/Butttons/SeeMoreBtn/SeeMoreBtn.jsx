// import { useNavigate } from 'react-router-dom';
import { StyledSeeMoreBtn } from './SeeMoreBtn.styled';

export const SeeButton = ({ id }) => {
  //   const navigate = useNavigate();

  return (
    <StyledSeeMoreBtn
      to={`/drink/${id}`}
      //   onClick={() => {
      //     navigate(`/drink/${id}`);
      //   }}
    >
      See more
    </StyledSeeMoreBtn>
  );
};
// '' - маршрут
// кнопку See more реалізовану як посилання, що переадресовує користувача
//на сторінку з описом відповідного коктейлю DrinkPage
