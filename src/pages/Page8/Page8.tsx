import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useVibration } from 'activeBook-core/hooks/effects/vibration';

import {
  PageWrapper,
  WithModal,
  EasterEgg as EasterEggComponent,
  P,
} from 'activeBook-core/components';

export const Page8 = () => {
  const { vibrationOn } = useVibration();

  useAudio({
    id: 'page-8_notification',
    page: 8,
    src: './assets/book_data/audios/sounds/notification.mp3',
    playOnLoad: true,
    onPlay() {
      vibrationOn(500);
    },
  });

  const jimmyAudio = useAudio({
    id: 'page-8_jimmy',
    page: 8,
    src: './assets/book_data/audios/music/Jimmy.mp3',
    loop: false,
    playOnLoad: false,
  });

  const EasterEgg = (
    <EasterEggComponent onClick={() => jimmyAudio?.play()} id="page-8_jimmy">
      очень любил.
    </EasterEggComponent>
  );

  const Comment1 = (
    <WithModal text="в наладонник," triggerType="author" mode="text">
      Здесь я явно вдохновлялся Замятиным и Оурэллом, а возможно даже Стругацкими,
      там подобных слов с атмосферой ретро-футуризма много
    </WithModal>
  );

  const Comment2 = (
    <WithModal text="Ярослава," triggerType="author" mode="text">
      Ярославом зовут моего второго брата
    </WithModal>
  );

  const Comment3 = (
    <WithModal text="топливо," triggerType="author" mode="text">
      Вспоминается Футурама и зверёк, который испражнялся таким топливом
    </WithModal>
  );

  return (
    <PageWrapper>
      <P>
        Глянув {Comment1} Егор увидел сообщение от {Comment2}, лучшего друга.
        Они знали друг друга с раннего детства и всегда поддерживали друг друга.
        Сейчас у Егора кроме Ярика никого не было.
      </P>

      <P>
        «Счастливого пути! Напиши, как доберёшься», – прочитал он.
        Егор невольно ухмыльнулся.
        Даже в таком коротком сообщении Ярик умудрился пошутить.
      </P>

      <P>
        «Спасибо, обязательно!» – отправил он ответ.
      </P>

      <P>
        Вот уже показалась ракета.
        Егор их {EasterEgg}
        И всегда невольно улыбался, глядя на них.
        А это была модель КВ-17, специально разработанная для полётов к краю вселенной.
        Пятьдесят лет назад было совершено фундаментальное открытие.
        Гипотеза о расширении вселенной оказалась ошибочной:
        у вселенной существует не удаляющаяся относительно Солнечной системы физическая граница.
      </P>

      <P>
        Ракета была поистине громадной.
        И чем ближе они подъезжали — тем сильнее приходилось задирать голову вверх для того,
        чтобы увидеть головную часть.
        Ракета была бы ещё больше, если бы не открытое в начале века {Comment3}
        которого для создания нужной тяги требуется относительно немного
      </P>

      <P>
        На самом деле ракеты без людей уже отправлялись «за границу»,
        но показания, зафиксированные приборами, были очень противоречивыми.
      </P>

      <P>
        Чтобы получить ответы, решили отправить человека, который сможет воочию увидеть и описать
        происходящие там события и процессы.
        Егор был одним из сотен добровольцев и прошел отборочные тесты лучше всех.
      </P>
    </PageWrapper>
  );
};
