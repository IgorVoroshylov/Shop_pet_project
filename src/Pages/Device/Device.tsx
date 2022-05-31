import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { useFela } from 'react-fela';
import { useNavigate, useParams } from 'react-router-dom';
import { Preloader } from '../../components';
import useStore from '../../hooks/useStore';
import ErrorPage from '../404';
import ItemInfo from './ItemInfo';
import EditInfoModal from './EditInfoModal';
import Comments from './Comments';
import {
  BackButton,
  DeviceContainer,
  DeviceInfoWrapper,
  DescriptionBlock,
  DeviceImageRule,
} from './DeviceItem.style';

const EditInfoMemo = React.memo(EditInfoModal);
const ItemInfoMemo = React.memo(ItemInfo);

const Device: React.FC = () => {
  const { css, theme } = useFela();
  const { id } = useParams();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState<boolean>(false);

  const { getItem, item, isLoading, getComments } =
    useStore('ItemProductState');
  const { isAdmin } = useStore('UserState');

  useEffect(() => {
    getItem(id as string);
    getComments(id as string);
  }, [id, getItem, getComments]);

  if (!item) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={css(DeviceContainer)}>
      <button
        className={css(BackButton(theme as ThemeType))}
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <section className={css(DeviceInfoWrapper)}>
        <div>
          <img
            src={item ? item.imageUrl : ''}
            alt="#"
            className={css(DeviceImageRule)}
          />
        </div>

        <div className={css(DescriptionBlock)}>
          <ItemInfoMemo
            item={item as GoodsItemType}
            setEditMode={setEditMode}
            isAdmin={isAdmin}
          />
          {editMode && (
            <EditInfoMemo
              //editMode={editMode}
              item={item as GoodsItemType}
              setEditMode={setEditMode}
            />
          )}
        </div>
      </section>

      <Comments id={id as string} />
    </div>
  );
};

export default observer(Device);
