import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { PageWrapper, P } from 'activeBook-core/components';

export const Page4 = () => {
  useAudio({
    id: 'page-4_people-and-cameras-ambient',
    page: 4,
    src: './assets/book_data/audios/sounds/people-and-cameras-ambient.mp3',
    loop: true,
    type: 'bg',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <P>
        Он ехал очень заблаговременно.
      </P>

      <P>
        Даже слишком.
      </P>

      <P>
        Но журналисты и зеваки, судя по всему, тоже не спали всю ночь.
      </P>

      <P>
        Отовсюду доносились щёлкающие камеры.
      </P>

      <P>
        Кто-то пришёл с детьми.
      </P>

      <P>
        Кто-то что-то кричал вслед автомобилю.
      </P>

      <P>
        Кто-то стоял с микрофоном и вёл эфир.
      </P>

      <P>
        Предусмотрительно надетые солнцезащитные очки спасали глаза от бесконечных вспышек.
      </P>

      <P>
        Чем ближе к КПП &mdash; тем больше становилось людей.
      </P>

      <P>
        Впрочем, за воротами их вряд ли будет меньше.
      </P>

      <P>
        Но хотя бы никто не полезет тебе в рот с просьбами
        прокомментировать ситуацию и не ослепит тебя очередной вспышкой камеры.
      </P>
    </PageWrapper>
  );
};
