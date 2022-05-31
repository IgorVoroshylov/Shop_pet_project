import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFela } from 'react-fela';
import { FormProvider, useForm } from 'react-hook-form';
import { CustomInput } from '../../../components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  AddBrandContainer,
  AddBrandContent,
  ButtonWrapper,
  InfoMessage,
} from './addBrand.style';
import useStore from '../../../hooks/useStore';
import { observer } from 'mobx-react';
import { v4 as uuidv4 } from 'uuid';

const schema = yup.object().shape({
  brand: yup.string().required('Brand is a required field'),
});

type OwnType = {
  setAddBrandModal: Dispatch<SetStateAction<boolean>>;
};

type BrendFormType = {
  brand: string;
};

const AddBrand: React.FC<OwnType> = ({ setAddBrandModal }) => {
  const { css } = useFela();
  const [showModal, setshowModal] = useState<boolean>(false);
  const { createBrand, successLoadBrand } = useStore('AppState');

  useEffect(() => {
    setshowModal(true);
  }, []);

  const metod = useForm<BrendFormType>({
    defaultValues: {
      brand: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { reset } = metod;

  const closeModal = () => {
    setshowModal(false);
    reset();
    setTimeout(() => setAddBrandModal(false), 600);
  };

  const addBrand = (data: BrendFormType) => {
    const newBrand = {
      id: uuidv4(),
      name: data.brand,
    };

    createBrand(newBrand);
    reset();
  };

  return (
    <div className={css(AddBrandContainer(showModal))}>
      <div className={css(AddBrandContent(showModal))}>
        <div className={css(InfoMessage(successLoadBrand))}>
          Brand успешно добавлен!
        </div>

        <h3>Add Brand</h3>

        <FormProvider {...metod}>
          <form onSubmit={metod.handleSubmit(addBrand)}>
            <CustomInput name="brand" />

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

export default observer(AddBrand);
