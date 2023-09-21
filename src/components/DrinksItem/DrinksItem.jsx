import { StyledBtn, StyledImg, StyledName } from './StyledDrinksItem';

const DrinksItem = ({ drinkThumb, name }) => {
  return (
    <>
      <div style={{ width: 400 }}>
        <StyledImg src={drinkThumb} alt={name} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            width: '',
          }}
        >
          <StyledName>{name}</StyledName>
          <StyledBtn>See more</StyledBtn>
        </div>
      </div>
    </>
  );
};
export default DrinksItem;
