import { PageWrapper, P } from 'activeBook-core/components';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useSideShadow } from 'activeBook-core/hooks/effects/side/shadow';

export const Page11 = () => {
  useAudio({
    id: 'page-11_alarm-spaceship',
    page: 11,
    src: './assets/book_data/audios/sounds/alarm-spaceship.mp3',
    type: 'bg',
    playOnLoad: true,
    loop: true,
  });

  useSideShadow({
    color: 'red',
    speed: 850,
  });

  return (
    <PageWrapper>
      <P>
        Вдруг замигала красная лампочка, предупреждая о проблеме.
      </P>

      <P>
        Что-то пошло не по плану.
      </P>

      <P>
        Сообщение об ошибке гласило:
        «Телепортация невозможна.
        Обнаружена фатальная неисправность».
      </P>

      <P>
        «Фатальная неисправность?
        Кто писал текст для этой ошибки?
        Бред какой-то», – подумал Егор.
      </P>

      <P>
        По инструкции, в таких случаях, необходимо повторить операцию заново, что космонавт и сделал.
      </P>
    </PageWrapper>
  );
};
