import { useSideShadow } from 'activeBook-core/hooks/effects/side/shadow';
import { useAudio } from 'activeBook-core/hooks/effects/audio';

import { PageWrapper, WithModal, Img, P } from 'activeBook-core/components';

export const Page42 = () => {
  useAudio({
    id: 'page-42_heaven-music',
    page: 42,
    src: './assets/book_data/audios/music/heaven-music.mp3',
    loop: true,
  });

  useSideShadow({
    color: '#ffd700',
    speed: 10000,
  });

  const EasterEgg = (
    <WithModal text="звук в этом месте " triggerType="egg" eggId="page-42">
      <Img src="./assets/book_data/images/sound-like-heaven-vk.png" />
    </WithModal>
  );

  const Comment = (
    <WithModal text="и предсказуемый образ" triggerType="author" mode="text">
      Тут вспоминается фильм «О, боже», где Бог поступил точно так же с главным героем.
      Милая семейная комедия, рекомендую
    </WithModal>
  );

  return (
    <PageWrapper>
      <P>
        Не успел Егор ничего ответить, как очутился перед огромными вратами, сияющими золотым светом.
        Он стоял будто на огромном розоватом облаке.
        Короче, всё напоминало тот рай, который принято представлять на Земле.
        Даже {EasterEgg} исходил какой-то такой.
      </P>

      <P>
        Создатель пояснил, что он хотел создать наиболее понятный {Comment} для Егора.
        Он поступает так со всеми, кто покидает наш мир, чтобы сделать путешествие наиболее мягким.
      </P>
    </PageWrapper>
  );
};
