import { PageWrapper, P, WithModal } from 'activeBook-core/components';
import { useAudio } from 'activeBook-core/hooks/effects/audio';

export const Page30 = () => {
  useAudio({
    id: 'page-30_spacedoor-close',
    page: 30,
    src: './assets/book_data/audios/sounds/spacedoor-close.mp3',
    playOnLoad: true,
  });

  const Comment = (
    <WithModal text="оборвалась на середине." triggerType="author" mode="text">
      Здесь я немного описал собственный опыт применения общей анестезии, у меня было именно так
    </WithModal>
  );

  return (
    <PageWrapper>
      <P>
        Активировав систему поддержки сна, закрыв иллюминаторы
        и на всякий случай включив маскировку, Егор лёг в специальную капсулу.
      </P>

      <P>
        Люк над головой закрылся.
      </P>

      <P>
        Он почувствовал лёгкое головокружение,
        которое всегда бывает перед погружением в искусственный сон.
      </P>

      <P>
        Егор не успел ни о чём подумать — через секунду мысль резко {Comment}
        Морфей забрал его в свои объятия.
      </P>
    </PageWrapper>
  );
};
