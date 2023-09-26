import styled from 'styled-components';

// Create a container for the footer
export const FooterContainer = styled.footer`
  border-top: 1px solid rgba(243, 243, 243, 0.2);
`;

export const FooterWrap = styled.div`
  padding: 40px 20px 18px;

  @media (min-width: 768px) {
    width: 768px;
    margin-left: auto;
    margin-right: auto;
    padding: 80px 32px 24px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 80px 100px 24px;
  }
`;

// Create a flex container
export const FlexContainer = styled.div`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const FooterGroup = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin-bottom: 0px;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    column-gap: 419px;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterTextTop = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: #f3f3f37e;
  transition: border 0.3s ease;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }
`;

export const FooterTextButton = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  color: #f3f3f37e;
  transition: border 0.3s ease;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  &:not(:last-child) {
    margin-right: 14px;

    @media (min-width: 768px) {
      margin-right: 18px;
    }
  }
`;
