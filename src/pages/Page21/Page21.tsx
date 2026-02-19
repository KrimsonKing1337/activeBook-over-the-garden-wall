import { PageWrapper, P, WithModal, Img } from 'activeBook-core/components';
import { useAudio } from 'activeBook-core/hooks/effects/audio';

export const Page21 = () => {
  useAudio({
    id: 'page-21_fly-ship-engine-heartbeat',
    page: 13,
    src: './assets/book_data/audios/sounds/fly-ship-engine-heartbeat.mp3',
    type: 'bg',
    loop: true,
    playOnLoad: true,
  });

  const EasterEgg = (
    <WithModal text="поездка в метро" triggerType="egg" eggId="page-21">
      <Img src="./assets/book_data/gifs/granny-in-hyper.gif" />
    </WithModal>
  );

  return (
    <PageWrapper>
      <P>
        Непроглядная тьма, окружающая корабль, успокаивала космонавта.
        Вдали от людей, слышно лишь двигатель и стук сердца &mdash; это ли не счастье.
      </P>

      <P>
        По расписанию у него был отдых.
      </P>

      <P>
        Егор любил читать.
      </P>

      <P>
        Как ни странно, но даже когда люди научились проецировать видео, звук
        и даже тактильные ощущения с запахами, классический буквенный вид повествования не умер.
      </P>

      <P>
        Достав свой наладонник, космонавт стал выбирать, что же ему почитать сегодня.
        Сотни и тысячи книг ждали своей очереди в памяти устройства.
      </P>

      <P>
        Лететь долго, нужно выбрать что-то соответствующей длины.
        Выбор пал на Терри Пратчетта, серия про Плоский мир.
        Егор решил начать с первой книги из цикла: «Цвет волшебства».
      </P>

      <P>
        Бесконечный хаос мыслей отступил (даже про то, смотрела она или нет).
      </P>

      <P>
        Можно было даже подумать, будто это просто {EasterEgg}, только долгая и с пустыми вагонами.
      </P>

      <P>
        И телепортацией.
      </P>
    </PageWrapper>
  );
};
