import React from 'react';
import { useFela } from 'react-fela';
import { BasketIcon } from '../../Assets/Icon';
import {
  AlreadyBasketButton,
  ButtonRule,
  svgSizeRule,
} from './basketButtons.style';

type OwnProps = {
  hasInBasket: boolean;
  deleteBasketItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
  addToBasket: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const BasketButtons: React.FC<OwnProps> = ({
  hasInBasket,
  deleteBasketItem,
  addToBasket,
}) => {
  const { css, theme } = useFela();

  return (
    <div>
      {hasInBasket ? (
        <button
          onClick={deleteBasketItem}
          className={css(AlreadyBasketButton(theme as ThemeType))}
        >
          Товар в корзине
          <BasketIcon styleForIcon={svgSizeRule} />
        </button>
      ) : (
        <button
          onClick={addToBasket}
          className={css(ButtonRule(theme as ThemeType))}
        >
          В корзину
          <BasketIcon styleForIcon={svgSizeRule} />
        </button>
      )}
    </div>
  );
};

export default BasketButtons;
