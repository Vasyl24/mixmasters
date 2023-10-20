import { StyledDeleteBtn, TrashIcon } from './DeleteBtn.styled';
import sprite from 'assets/sprite.svg';

export const DeleteBtn = ({ onDelete, id }) => {
  return (
    <>
      <StyledDeleteBtn onClick={() => onDelete(id)}>
        <TrashIcon>
          <use href={sprite + '#icon-trash'} />
        </TrashIcon>
      </StyledDeleteBtn>
    </>
  );
};
