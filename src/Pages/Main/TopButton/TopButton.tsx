import React, { RefObject, useEffect, useRef, useState } from 'react';
import { useFela } from 'react-fela';
import { GoToTopButton, TopSvgSizeRule } from '../Main.style';
import { TopArrow } from '../../../Assets/Icon';

type OwnType = {
  scrollToTop: () => void;
  positionElement: RefObject<HTMLDivElement>;
};

const TopButton: React.FC<OwnType> = ({ scrollToTop, positionElement }) => {
  const { css, theme } = useFela();
  const [bFlag, setBflag] = useState(false);

  const intObserver = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    console.log('on useEff');
    intObserver.current = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) {
        setBflag(true);
        console.log('show');
      } else if (entries[0].isIntersecting) {
        console.log('hidden');
        setBflag(false);
      }
    });
    //  если не хотим чтоб при первой отрисовки не выполнялось setBflag(false), нужно добавить условие "entries[0].isIntersecting & bFlag"
    // и в массив зависимостей добавить "bFlag", но тогда постоянно будет создаваться и удаляться подписка

    intObserver.current.observe(positionElement.current as Element);

    return () => {
      console.log('off useEff');
      if (intObserver.current) intObserver.current.disconnect();
    };
    // добавил зависимость bFlag, посскольку без него useEffect не будет обновляться и bFlag всегда будет false, из-за замыкания
  }, [positionElement]);

  return (
    <div>
      {bFlag && (
        <button
          className={css(GoToTopButton(theme as ThemeType))}
          onClick={scrollToTop}
        >
          <TopArrow styleForIcon={TopSvgSizeRule} />
        </button>
      )}
    </div>
  );
};

export default TopButton;
