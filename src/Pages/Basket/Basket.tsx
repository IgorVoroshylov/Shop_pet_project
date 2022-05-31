import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useFela } from 'react-fela';
import { Link } from 'react-router-dom';
import { DeleteIcon } from '../../Assets/Icon';
import useStore from '../../hooks/useStore';
import {
  BasketButton,
  BasketCheckout,
  BasketContainer,
  BasketImage,
  BasketItem,
  BasketItemInfoLeft,
  BasketItemInfoRight,
  BasketItemName,
  BasketTitle,
  EmptyMessage,
} from './basket.style';

const Basket: React.FC = () => {
  const { css, theme } = useFela();
  const { user } = useStore('UserState');
  const {
    basketItemList,
    getBasketItemList,
    deleteBasketItem,
    ItemListSize,
    TotalCost,
  } = useStore('BasketState');

  useEffect(() => {
    getBasketItemList(user?.id);
  }, [user?.id, getBasketItemList]);

  return (
    <div className={css(BasketContainer)}>
      <h2 className={css(BasketTitle)}>Корзина</h2>
      {basketItemList.map((device) => (
        <div key={device.id} className={css(BasketItem)}>
          <Link to={`/device/${device.id}`}>
            <div className={css(BasketItemInfoLeft(theme as ThemeType))}>
              <div className={css(BasketImage)}>
                <img src={device.imageUrl} alt="" />
              </div>

              <div className={css(BasketItemName)}>{device.name}</div>
            </div>
          </Link>

          <div className={css(BasketItemInfoRight(theme as ThemeType))}>
            <div>{device.price} $</div>
            <button
              onClick={() => deleteBasketItem(device.id)}
              className={css(BasketButton())}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      ))}

      {ItemListSize ? (
        <div className={css(BasketCheckout)}>
          Итого: <span>{TotalCost}</span> $ <button>Оформить заказ</button>
        </div>
      ) : (
        <div className={css(EmptyMessage)}>Корзина пуста</div>
      )}
    </div>
  );
};

export default observer(Basket);
