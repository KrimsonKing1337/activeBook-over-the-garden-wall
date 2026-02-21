import {
  PageWrapper,
  WithModal,
  Img,
  H1,
  P,
  Spoiler,
} from 'activeBook-core/components';

export const Page45 = () => {
  const Action1 = (
    <WithModal text="Олег Шилов" triggerType="action">
      <Img src="./assets/book_data/gifs/Kojima.gif" />
    </WithModal>
  );

  const Action2 = (
    <WithModal text="Дасти" triggerType="action">
      <Img src="./assets/book_data/images/Dusty.jpg" />
    </WithModal>
  );

  return (
    <PageWrapper>
      <H1>
        Над книгой принимали участие
      </H1>

      <br />

      <P>
        Сценарий, программирование, контент, менеджмент: {Action1}
      </P>

      <P>
        UI / UX: Гордей Переходов
      </P>

      <P>
        Редактура: Максим Авраменко, Катерина Салдаева, Ликка Волхова
      </P>

      <P>
        Любимый кот: {Action2}
      </P>

      <P>
        Большое спасибо: маме, папе, друзьям. Вы всегда верили в меня и эту идею
      </P>

      <P>
        Отдельное спасибо: тебе. За то, что прочитал.
        Подписывайся на канал, ставь лайки.
        Стоп, это же не тот ресурс...
      </P>

      <br />

      <Spoiler label="Копирайты">
        <div>
          <P>
            Звуки взяты с сайтов freesounds.org, noisefx.ru и pixabay.com
          </P>

          <P>
            Авторы звуков:
          </P>

          <P>
            RecForge II;
            <br />
            Patrick Hunt;
            <br />
            klankbeeld
            <br />
            jon bellini;
            <br />
            Adam Matthews;
            <br />
            John Dominoski;
          </P>

          <P>
            Авторы музыки:
          </P>

          <P>
            Сергей Ейбог;
            <br />
            Кирк Хамильтон;
            <br />
            Брайан Кози;
            <br />
            Чарли Бриззет;
            <br />
            Jorge "Vasco" Vasconcelo
            <br />
            Juha "Millboy" Myllylä
            <br />
            Manoa
          </P>

          <P>
            P.S.: если кого-то забыл упомянуть - дайте знать, обязательно добавлю в список
          </P>
        </div>
      </Spoiler>
    </PageWrapper>
  );
};
