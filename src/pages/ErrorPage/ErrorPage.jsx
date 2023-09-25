import React from 'react';
import ErrorPage404 from './ErrorPage_404/ErrorPage404';
import { Wrapper, Container, MainTitle } from './ErrorPage.styled';

function NotFoundPage() {
  return (
    <Wrapper>
      <Container>
        <MainTitle>
          <ErrorPage404></ErrorPage404>
        </MainTitle>
      </Container>
    </Wrapper>
  );
}

export default NotFoundPage;
