import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { useFela } from 'react-fela';
import { useNavigate } from 'react-router-dom';
import { BasketButtons, DeleteItemModal } from '../../../components';
import useStore from '../../../hooks/useStore';
import {
  ButtonBlock,
  CardImage,
  CardImageContainer,
  CardWrapper,
  InformationBlock,
  ItemName,
  ItemPrice,
  ItemWrapper,
} from './ItemCard.style';

type OwnType = {
  item: GoodsItemType;
  isAdmin: boolean;
};

const ItemCard: React.FC<OwnType> = ({ item, isAdmin }) => {
  const { css, theme } = useFela();
  const navigate = useNavigate();
  const { deleteItem } = useStore('DeviceState');
  const { BasketIdList, addItemToBasket, deleteBasketItem } =
    useStore('BasketState');
  const { user } = useStore('UserState');
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const hasInBasket = BasketIdList.includes(item.id); // проверяем наличие товара в корзине

  const openModalWindow = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setDeleteModal(true);
  };

  const removeItem = () => {
    setDeleteModal(false);
    deleteItem(item.id);
  };

  const moveToItem = (): void => {
    // higth in local store
    navigate(`device/${item.id}`);
  };

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
    <div>
      <div
        className={css(CardWrapper(theme))}
        onClick={moveToItem}
        role="presentation"
      >
        <div className={css(ItemWrapper)}>
          <div className={css(CardImageContainer)}>
            <img className={css(CardImage)} src={item.imageUrl} alt="" />
          </div>

          <div className={css(InformationBlock)}>
            <h2 className={css(ItemName)}>{item.name}</h2>
            <div className={css(ItemPrice)}>price: {item.price} $</div>
          </div>

          <div className={css(ButtonBlock(theme as ThemeType))}>
            <BasketButtons
              hasInBasket={hasInBasket}
              addToBasket={addToBasket}
              deleteBasketItem={deleteItemFromBasket}
            />

            {isAdmin && <button onClick={openModalWindow}>Удалить</button>}
          </div>
        </div>
      </div>

      {deleteModal && (
        <DeleteItemModal
          setDeleteModal={setDeleteModal}
          removeItem={removeItem}
          name={item.name}
        />
      )}
    </div>
  );
};

export default observer(ItemCard);
