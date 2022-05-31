import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFela } from 'react-fela';
import {
  ButtonBlock,
  DeleteModal,
  DeleteModalContent,
  ModalTitle,
} from './deleteModal.style';

type OwnProps = {
  setDeleteModal: Dispatch<SetStateAction<boolean>>;
  removeItem: () => void;
  name: string;
};

const DeleteItemModal: React.FC<OwnProps> = ({
  setDeleteModal,
  removeItem,
  name,
}) => {
  const [showModal, setShowModal] = useState(false);
  const { css } = useFela();

  useEffect(() => {
    setShowModal(true);
  }, []);

  const close = () => {
    setShowModal(false);
    setTimeout(() => setDeleteModal(false), 600);
  };

  const remove = () => {
    setShowModal(false);
    setTimeout(() => removeItem(), 600);
  };

  return (
    <div className={css(DeleteModal(showModal))}>
      <div className={css(DeleteModalContent(showModal))}>
        <div className={css(ModalTitle)}>
          Do you want to delete this item: &quot;{name}&quot;
        </div>
        <div className={css(ButtonBlock)}>
          <button onClick={remove}>delete</button>
          <button onClick={close}>close</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemModal;
