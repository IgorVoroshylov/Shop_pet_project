import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFela } from 'react-fela';
import { FormProvider, useForm } from 'react-hook-form';
import {
  AddModal,
  AddModalContent,
  ButtonContainer,
  InfoMessage,
} from './addDevice.style';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomInput from '../../../components/CustomInput';
import CustomSelect from '../../../components/CustomSelect';
import { v4 as uuidv4 } from 'uuid';
import useStore from '../../../hooks/useStore';
import { observer } from 'mobx-react';

const addNewItemSchema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
  count: yup
    .number()
    .typeError('Count must be a `number` type')
    .required('Count is a required field'),
  width: yup
    .number()
    .typeError('Width must be a `number` type')
    .required('Width is a required field'),
  height: yup
    .number()
    .typeError('Height must be a `number` type')
    .required('Height is a required field'),
  weight: yup
    .number()
    .typeError('Weight must be a `number` type')
    .required('Weight is a required field'),
  price: yup
    .number()
    .typeError('Price must be a `number` type')
    .required('Price is a required field'),
  type: yup.string().required('Type is a required field'),
  brand: yup.string().required('Brand is a required field'),
  // type: yup
  //   .number()
  //   .typeError('type is a required field')
  //   .test('value', 'type is a required field', (val) => val !== 0), //! проверка для числовых значений в селекторе
});

type OwnProps = {
  setAddDeviceModal: Dispatch<SetStateAction<boolean>>;
  types: Array<BrandAndType>;
  brands: Array<BrandAndType>;
};

const AddDeviceModal: React.FC<OwnProps> = ({
  setAddDeviceModal,
  types,
  brands,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { css } = useFela();
  const { createItem, successLoading } = useStore('ItemProductState');

  useEffect(() => {
    setShowModal(true);
  }, []);

  const metod = useForm<FormType>({
    mode: 'onChange',
    resolver: yupResolver(addNewItemSchema),
    defaultValues: {
      type: '',
      brand: '',
      name: '',
      count: 0,
      width: 0,
      height: 0,
      weight: 0,
      price: 0,
    },
  });

  const { reset } = metod;

  const closeModal = () => {
    setShowModal(false);
    reset();
    setTimeout(setAddDeviceModal, 600, false);
  };

  const addNewItem = (data: FormType) => {
    const newDevice: GoodsItemType = {
      id: uuidv4(),
      imageUrl: 'https://picsum.photos/300/300',
      name: data.name,
      count: data.count,
      size: {
        width: data.width,
        height: data.height,
      },
      weight: data.weight,
      price: data.price,
      type: data.type,
      brand: data.brand,
    };

    createItem(newDevice);
    reset();
  };

  return (
    <div className={css(AddModal(showModal))}>
      <div className={css(AddModalContent(showModal))}>
        <div className={css(InfoMessage(successLoading))}>
          Позиция успешно добавлена!
        </div>

        <FormProvider {...metod}>
          <form onSubmit={metod.handleSubmit(addNewItem)}>
            <CustomSelect
              name="type"
              options={types}
              defaultValue="chose type"
            />
            <CustomSelect
              name="brand"
              options={brands}
              defaultValue="chose brend"
            />
            <CustomInput name="name" />
            <CustomInput name="count" />
            <CustomInput name="width" />
            <CustomInput name="height" />
            <CustomInput name="weight" />
            <CustomInput name="price" />

            <div className={css(ButtonContainer)}>
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

export default observer(AddDeviceModal);
