import styled from 'styled-components';

export const StyledPageContainer = styled.div`
  width: 100%;
  margin: 0;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 158px;
    padding-bottom: 140px;
  }
`;

export const AllPageWraper = styled.div`
  

@media (min-width: 1440px){
		width: 100%;
		display: flex;
		gap: 94px;
		flex-direction: row;
	}
`;

