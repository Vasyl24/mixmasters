import { StyledLogoutBtn } from './LogoutBtn.styled';

export const LogoutBtn = () => {
  return <StyledLogoutBtn>Log out</StyledLogoutBtn>;
};

// Компонент рендерить кнопку, по кліку на яку відправляється запит на сервер, 
//який видаляє активну сесію користувача.