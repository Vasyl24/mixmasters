import { Drinks } from 'components/Drinks/Drinks';
import { DrinksSearh } from 'components/DrinksSearch/DrinksSearch';
import { PageTitle } from 'components/PageTitle/PageTitle';

export const DrinksPage = () => {
  return (
    <>
      <PageTitle title="Drinks" />
      <DrinksSearh />
      <Drinks />
      {/* <Paginator /> */}
    </>
  );
};
