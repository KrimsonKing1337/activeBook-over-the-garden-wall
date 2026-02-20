import { useSideText } from 'activeBook-core/hooks/effects/side/text';

import { PageWrapper, H1, H2, P } from 'activeBook-core/components';
import { SideText } from 'activeBook-core/components/SideEffects/components/SideText';

import * as sideTextStyles from 'activeBook-core/components/SideEffects/components/SideText/SideText.scss';

export const Page35 = () => {
  const SideTextTemplate = (
    <SideText>
      <>
        <span className={sideTextStyles.error}>
          целостность обшивки: [ОШИБКА];
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
          температура: [ОШИБКА];
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.warning}>
          пульс: не обнаружен. таблетки уже не помогут!;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
          информация о маршруте: до конца маршрута осталось 300 метров.
          выходя из машины не забудьте личные вещи;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.error}>
          статус кофе: [ОШИБКА]
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
          статус элементов питания: элементы питания заряжены на [ОШИБКА], разряжаются;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.warning}>
          напоминание: [ОШИБКА];
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.error}>
          sudo: команда sudo не найдена
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.ok}>
          8 800 555 35 35 - проще позвонить, чем у кого-то занимать!
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
          не думаю, что это кто-то будет читать, поэтому тут особо пасхалок и не стал пихать
        </span>

        <span>
          но если ты читаешь - то должно быть ты неплохой фронтенд-разработчик. снимаю шляпу
        </span>

        <span className={sideTextStyles.defaultMargin} />
      </>

      <>
        <span className={sideTextStyles.error}>
          целостность обшивки: [ОШИБКА];
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
          температура: [ОШИБКА];
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.warning}>
          пульс: не обнаружен. таблетки уже не помогут!;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
          информация о маршруте: до конца маршрута осталось 300 метров.
          выходя из машины не забудьте личные вещи;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.error}>
          статус кофе: [ОШИБКА]
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
          статус элементов питания: элементы питания заряжены на [ОШИБКА], разряжаются;
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.warning}>
          напоминание: [ОШИБКА];
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.error}>
          sudo: команда sudo не найдена
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span className={sideTextStyles.ok}>
          8 800 555 35 35 - проще позвонить, чем у кого-то занимать!
        </span>

        <span className={sideTextStyles.defaultMargin} />

        <span>
          не думаю, что это кто-то будет читать, поэтому тут особо пасхалок и не стал пихать
        </span>

        <span>
          но если ты читаешь - то должно быть ты неплохой фронтенд-разработчик. снимаю шляпу
        </span>

        <span className={sideTextStyles.defaultMargin} />
      </>
    </SideText>
  );

  useSideText({
    isActiveDefault: true,
    template: SideTextTemplate,
    speed: 5000,
  });

  return (
    <PageWrapper>
      <H1>
        Глава 6.
      </H1>

      <H2>
        По ту сторону изгороди.
      </H2>

      <P>
        Впереди по-прежнему ничего не было.
        Лишь бесконечный белый свет, ослепляющий космонавта.
        Как будто самым мощным прожектором светили прямо в лицо.
      </P>

      <P>
        Поэтому Егор закрыл иллюминаторы.
      </P>

      <P>
        Информация, поступающая на дисплеи, двигалась невыносимо быстро.
        Её было очень много. Но толку от этого было мало.
      </P>

      <P>
        Охватил жуткий мандраж. Чтобы справиться с этим,
        путешественник закинул в рот максимально допустимую дозу успокоительного.
      </P>

      <P>
        «Я такими темпами наркоманом стану», – подумал Егор с досадой.
        Но делать нечего.
        Ситуация экстремальная.
        Он старался не забывать об этом.
      </P>
    </PageWrapper>
  );
};
