import { PageWrapper, P } from 'activeBook-core/components';

import { useWelcomeOutside } from './hooks';

export const Page34 = () => {
  useWelcomeOutside();

  return (
    <PageWrapper>
      <P>
        «Визуальная оценка ситуации» ввела героя в ступор.
      </P>

      <P>
        Всё, куда ни глянь, было белым. Весь космос был белым!
        И это пугало даже больше, чем непроглядная тьма.
        Вернее, это тоже была такая же тьма, только белого цвета.
        И как её тогда называть? Непроглядная белизна?..
      </P>

      <P>
        Охватила паника.
      </P>

      <P>
        Но нужно было двигаться дальше.
      </P>
    </PageWrapper>
  );
};
