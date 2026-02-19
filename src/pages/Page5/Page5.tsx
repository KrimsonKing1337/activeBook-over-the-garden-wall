import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { PageWrapper, WithModal, P } from 'activeBook-core/components';

export const Page5 = () => {
  useAudio({
    id: 'page-5_electric-gate-close',
    page: 5,
    src: './assets/book_data/audios/sounds/electric-gate-close.mp3',
    playOnLoad: true,
  });

  const Comment1 = (
    <WithModal text="заглянуть за" triggerType="author" mode="text">
      Таким было первоначальное название рассказа
    </WithModal>
  );

  const Comment2 = (
    <WithModal text="смогло создать." triggerType="author" mode="text">
      Меня это всегда восхищало
    </WithModal>
  );

  const Comment3 = (
    <WithModal text="Егор!" triggerType="author" mode="text">
      Главного героя я назвал в честь своего брата
    </WithModal>
  );

  return (
    <PageWrapper>
      <P>
        Ворота, наконец, закрылись за спиной.
      </P>

      <P>
        Щёлканье стихло.
      </P>

      <P>
        Лишь тревожные мысли никуда не делись, внутренний монолог продолжался.
      </P>

      <P>
        С другой стороны, восхищение и гордость одолевали его до сих пор.
      </P>

      <P>
        Достижения наших учёных всё же потрясают.
      </P>

      <P>
        Не каждый день человек летит {Comment1} границы вселенной.
      </P>

      <P>
        А ведь совсем недавно люди жили лишь на Земле и не знали, как добраться до ближайших экзопланет.
      </P>

      <P>
        Да-а, технический прогресс не стоит на месте.
      </P>

      <P>
        И глядя вокруг себя, невольно улыбаешься от мысли, сколько всего человечество {Comment2}
      </P>

      <P>
        – {Comment3} – кто-то окликнул сзади.
      </P>

      <P>
        Обернувшись, он заметил своего надзорного врача и ускорил шаг,
        желая скрыться от него за поворотом, чтобы напугать.
        Они много лет были знакомы, и подобные шутки им не надоели до сих пор.
      </P>
    </PageWrapper>
  );
};
