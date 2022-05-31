import { observer } from 'mobx-react';
import React, { Dispatch, SetStateAction } from 'react';
import { useFela } from 'react-fela';
import { BasketButtons } from '../../../components';
import useStore from '../../../hooks/useStore';
import {
  ButtonContainer,
  ButtonRule,
  ItemInfoName,
  ItemInfoWrapper,
  ItemStyle,
} from './ItemInfo.style';

type OwnType = {
  item: GoodsItemType;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  isAdmin: boolean;
};

const ItemInfo: React.FC<OwnType> = ({ item, setEditMode, isAdmin }) => {
  const { css, theme } = useFela();
  const { BasketIdList, addItemToBasket, deleteBasketItem } =
    useStore('BasketState');
  const { user } = useStore('UserState');

  const hasInBasket = BasketIdList.includes(item.id);

  const addToBasket = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    const basketItem = {
      id: item.id,
      userBasketId: user?.id,
      name: item.name,
      imageUrl: item.imageUrl,
      price: item.price,
    };

    addItemToBasket(basketItem);
  };

  const deleteItemFromBasket = (
    e: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    e.stopPropagation();
    deleteBasketItem(item.id);
  };

  return (
    <div className={css(ItemInfoWrapper)}>
      <div className={css(ItemInfoName)}>{item.name}</div>
      <div className={css(ItemStyle)}>count: {item.count}</div>
      <div className={css(ItemStyle)}>width: {item.size.width}</div>
      <div className={css(ItemStyle)}>height: {item.size.height}</div>
      <div className={css(ItemStyle)}>weight: {item.weight}</div>
      <div className={css(ItemStyle)}>price: {item.price} $</div>

      <div className={css(ButtonContainer)}>
        <BasketButtons
          hasInBasket={hasInBasket}
          addToBasket={addToBasket}
          deleteBasketItem={deleteItemFromBasket}
        />
      </div>

      {isAdmin && (
        <button
          className={css(ButtonRule(theme as ThemeType))}
          onClick={() => setEditMode(true)}
        >
          Edit item
        </button>
      )}
    </div>
  );
};

export default observer(ItemInfo);
