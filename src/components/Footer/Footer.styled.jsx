import styled from 'styled-components';


const tablet = '@media (min-width: 768px)';
const desktop = '@media (min-width: 1024px)';

// Create a container for the footer
export const FooterContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 40px 20px 18px;
  border-top: 1px solid ${props => props.theme.f3f3f333};

  @media ${tablet} {
    padding: 80px 32px 24px;
  }

  @media ${desktop} {
    padding: 80px 100px 24px;
  }
`;

// Create a flex container
export const FlexContainer = styled.div`
  margin-bottom: 80px;

  @media ${tablet} {
    display: flex;
    justify-content: space-between;
  }
`;

// Create a footer group
export const FooterGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;

  @media ${tablet} {
    flex-direction: column;
  }

  @media ${desktop} {
    flex-direction: row;
  }
`;

// Create a footer info container
export const FooterInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media ${tablet} {
  }
`;

// Create a footer text element
export const FooterText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: #f3f3f37e;
  transition: border 0.3s ease;

  @media ${tablet} {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  &:not(:last-child) {
    margin-right: 14px;

    @media ${tablet} {
      margin-right: 18px;
    }
  }
`;




