import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFela } from 'react-fela';
import { FormProvider, useForm } from 'react-hook-form';
import { CustomInput } from '../../../components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  AddTypeContainer,
  AddTypeContent,
  ButtonWrapper,
  InfoMessage,
} from './addType.style';
import { observer } from 'mobx-react';
import useStore from '../../../hooks/useStore';
import { v4 as uuidv4 } from 'uuid';

const schema = yup.object().shape({
  type: yup.string().required('Type is a required field'),
});

type DeviceFormType = {
  type: string;
};

type OwnProps = {
  setAddTypeModal: Dispatch<SetStateAction<boolean>>;
};

const AddType: React.FC<OwnProps> = ({ setAddTypeModal }) => {
  const { css } = useFela();
  const [showModal, setShowModal] = useState<boolean>(false);
  const { createType, successLoadType } = useStore('AppState');

  useEffect(() => {
    setShowModal(true);
  }, []);

  const metod = useForm<DeviceFormType>({
    defaultValues: {
      type: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { reset } = metod;

  const addType = (data: DeviceFormType) => {
    const newType = {
      id: uuidv4(),
      name: data.type,
    };

    createType(newType);
    reset();
  };

  const closeModal = () => {
    setShowModal(false);
    reset();
    setTimeout(() => setAddTypeModal(false), 600);
  };

  return (
    <div className={css(AddTypeContainer(showModal))}>
      <div className={css(AddTypeContent(showModal))}>
        <div className={css(InfoMessage(successLoadType))}>
          Type успешно добавлен!
        </div>

        <h3>Add Type</h3>

        <FormProvider {...metod}>
          <form onSubmit={metod.handleSubmit(addType)}>
            <CustomInput name="type" />

            <div className={css(ButtonWrapper)}>
              <button type="submit">Save</button>
              <button type="button" onClick={closeModal}>
                Close
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default observer(AddType);
