import { StyledSeeMoreBtn } from './SeeMoreBtn.styled';

export const SeeButton = ({ id }) => {
  return <StyledSeeMoreBtn to={`/drinks/${id}`}>See more</StyledSeeMoreBtn>;
};
