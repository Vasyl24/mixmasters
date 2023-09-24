import React from 'react';
import ErrorPage404 from "./ErrorPage_404/ErrorPage404"
import {
  Wrapper,
  Container,
  MainTitle,
  Footer,
} from './ErrorPage.styled'; // Replace with the actual file path

function NotFoundPage() {
  return (
    <Wrapper>
      <Container>
        <MainTitle>
          <ErrorPage404>
            {/* Your content for NotFound */}
          </ErrorPage404>
        </MainTitle>
      </Container>
      <Footer> {/* Your footer content */}</Footer>
    </Wrapper>
  );
}

export default NotFoundPage;
