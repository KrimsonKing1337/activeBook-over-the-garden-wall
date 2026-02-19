import { PageWrapper, P, WithModal } from 'activeBook-core/components';

export const Page31 = () => {
  const Comment = (
    <WithModal text="«Ты пойдёшь со мной?»" triggerType="author" mode="text">
      Отсылка на Славю из графической новеллы «Бесконечное лето», музыка оттуда же
    </WithModal>
  );

  return (
    <PageWrapper>
      <P>
        Снилось что-то необыкновенно уютное и тёплое.
        Лето, зелень и лёгкий ветерок.
      </P>

      <P>
        Уносящий вдаль старый автобус.
      </P>

      <P>
        И какая-то странная девочка, которая спросила: {Comment}
      </P>
    </PageWrapper>
  );
};
