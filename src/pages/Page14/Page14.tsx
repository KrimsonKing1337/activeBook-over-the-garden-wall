import { PageWrapper, WithModal, P } from 'activeBook-core/components';

import { useAudio } from 'activeBook-core/hooks/effects/audio';
import { useRain } from 'activeBook-core/hooks/effects/flashlight/rain';

export const Page14 = () => {
  useAudio({
    id: 'page-14_rain-and-thunder',
    page: 14,
    src: './assets/book_data/audios/sounds/rain-and-thunder.mp3',
    type: 'bg',
    loop: true,
    playOnLoad: true,
  });

  useRain();

  const Comment = (
    <WithModal text="Снился дождь." triggerType="author" mode="text">
      Очень горжусь тем, как круто выглядит здесь эффект дождя. Особенно со вспышкой
    </WithModal>
  );

  return (
    <PageWrapper>
      <P>
        {Comment} Сильный, тяжёлый. Наш герой не видел дождей с осени и уже успел соскучиться по этому
        природному явлению. Пусть просто во сне, но всё равно приятно. Плюс к этому ещё и не мокнешь.
      </P>

      <P>
        И будто нужно было куда-то бежать. Прочь оттуда, бежать от дождя.
        Снился отец, которого Егор так любил.
        Он что-то кричал ему, но слова было не разобрать из-за сильного ливня.
      </P>

      <P>
        Тогда отец Егора пошёл в сарай. А когда вернулся &mdash; в его в руках было ружьё.
      </P>

      <P>
        Он прицелился.
      </P>
    </PageWrapper>
  );
};
