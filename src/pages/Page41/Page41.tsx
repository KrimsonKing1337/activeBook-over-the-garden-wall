import { useEffect } from 'react';

import { useSelector } from 'activeBook-core/store/store';
import { audioBgEffectsSelectors } from 'activeBook-core/store/effects/audio/audioBg';

import { useSideShadow } from 'activeBook-core/hooks/effects/side/shadow';
import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { PageWrapper, P, WithModal } from 'activeBook-core/components';
import { EasterEgg as EasterEggComponent } from 'activeBook-core/components/ColoredTextTrigger/EasterEgg';

export const Page41 = () => {
  const audioBgInstances = useSelector(audioBgEffectsSelectors.audioInstances);

  const caramelldansen = useAudio({
    id: 'page-41_caramelldansen',
    page: 41,
    src: './assets/book_data/audios/music/caramelldansen.mp3',
    playOnLoad: false,
    loop: true,
  });

  const valhalla = useAudio({
    id: 'page-41_valhalla',
    page: 41,
    src: './assets/book_data/audios/music/valhalla.mp3',
    playOnLoad: false,
  });

  const { sideShadowOn, sideShadowOff } = useSideShadow({
    color: 'caramel',
    speed: 364,
    isActiveDefault: false,
  });

  const documentClickHandler = () => {
    caramelldansen?.stop();
    sideShadowOff();

    audioBgInstances['page-1-45_Manoa-Jumaira-Drive']?.play();
  };

  const easterEgg1OnClickHandler = () => {
    audioBgInstances['page-1-45_Manoa-Jumaira-Drive']?.pause();

    caramelldansen?.play();
    sideShadowOn();

    setTimeout(() => {
      document.addEventListener('click', documentClickHandler, { once: true });
    }, 0);
  };

  useEffect(() => {
    document.removeEventListener('click', documentClickHandler);
  }, []);

  const easterEgg2OnClickHandler = () => {
    valhalla?.play();
  };

  const EasterEgg1 = (
    <EasterEggComponent onClick={easterEgg1OnClickHandler} id="page-41-1">
      настроение.
    </EasterEggComponent>
  );

  const EasterEgg2 = (
    <EasterEggComponent onClick={easterEgg2OnClickHandler} id="page-41-2">
      Вальгаллу,&nbsp;
    </EasterEggComponent>
  );

  const Comment1 = (
    <WithModal text="с ними всё будет в порядке." triggerType="author" mode="text">
      Здесь я хотел кратко описать их судьбы,
      что они мол поженились и вместе скучали по Егору, но не стал
    </WithModal>
  );

  const Comment2 = (
    <WithModal text="мы в ответе за тех, кого приручили." triggerType="author" mode="text">
      Тут тоже отсылка, думаю, ясна. Наверное, отчасти я решил это сюда включить,
      потому что только вот недавно ознакомился с произведением «Маленький принц».
      С другой стороны, эта фраза уже настолько вошла в обиход,
      что это уже и не отсылка, а просто народная мудрость
    </WithModal>
  );

  return (
    <PageWrapper>
      <P>
        Вскоре он стал задавать не те вопросы,
        которые было принято задавать в таком случае
        (подобных ситуаций он встречал много в книгах и фильмах),
        а те, которые мучили его на самом деле.
      </P>

      <P>
        – Она смотрела?..
      </P>

      <P>
        – О, да. Она смотрела. И да, у вас был шанс.
        Потерять тебя &mdash; для неё это было действительно горе.
        И для Ярослава тоже. Но не переживай, {Comment1}
      </P>

      <P>
        Почему-то это утешило Егора. С другой стороны, навалила грусть
        и щемящее чувство одиночества. В итоге он спросил:
      </P>

      <P>
        – И что теперь?
      </P>

      <P>
        – Как что, отправлю тебя к таким же замечательным и интересным людям,
        где вы будете вечно пировать и отлично проводить время, – ответил Александр.
      </P>

      <P>
        – Типа в рай? – уточнил Егор. Вообще, описанием больше походило на {EasterEgg2}
        но он не стал это произносить.
      </P>

      <P>
        – Так мою комнату ещё никто не называл.
        Но да, иногда там действительно как в раю, – усмехнулся Создатель
        и продолжил, – слушай, это всё и так зашло очень далеко.
        Я просто создал вселенную в рамках домашнего задания в школе.
        Но я даже не представлял, что в итоге всё так обернётся.
        Теперь вот расхлёбываю...
        В конце концов, {Comment2}
      </P>

      <P>
        – Ты создал всё сущее как домашнее задание в школе? – переспросил Егор.
      </P>

      <P>
        – Всё не так сложно, как тебе кажется.
        Не бери в голову, мой друг. Пойдём же.
        Я знаю, что поможет поднять тебе {EasterEgg1}
      </P>
    </PageWrapper>
  );
};
