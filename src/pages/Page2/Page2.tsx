import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { PageWrapper, WithModal, P } from 'activeBook-core/components';

export const Page2 = () => {
  useAudio({
    id: 'page-2_cooking-and-tv',
    page: 2,
    src: './assets/book_data/audios/sounds/cooking-and-tv.mp3',
    playOnLoad: true,
    loop: true,
  });

  const Comment = (
    <WithModal text="телевизор" triggerType="author" mode="text">
      в какой-то из предыдущих версий в этом месте включалось видео в модальном окне,
      где был отрезок из передачи «Контрольная закупка», выпуск про икру.
      Пришлось отказаться от этого из-за авторских прав
    </WithModal>
  );

  return (
    <PageWrapper>
      <P>
        Совершив утренний туалет, он стал готовить себе завтрак и включил {Comment}.
        Не то, что бы он особо хотел его смотреть, но полнейшая тишина давила на уши сильнее.
      </P>

      <P>
        Весной по утрам уже светло, что безусловно его радовало.
        А ведь после развода его мало что радовало.
      </P>

      <P>
        Покончив с завтраком, он выключил телевизор, взял свою счастливую монетку,
        оделся и стал спускаться к машине.
      </P>
    </PageWrapper>
  );
};
