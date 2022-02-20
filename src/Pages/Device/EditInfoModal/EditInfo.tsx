//! FormProvider
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFela } from 'react-fela';
import useStore from '../../../hooks/useStore';
import { FormProvider, useForm } from 'react-hook-form';
import { ButtonBlock, EditModal, EditModalContent } from './EditInfo.style';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomInput from '../../../components/CustomInput';

type OwnType = {
  item: GoodsItemType;
  //editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
};

const schema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
  count: yup
    .number()
    .typeError('Count must be a `number` type')
    .required('Count is a required field'),
  width: yup
    .number()
    .typeError('Count must be a `number` type')
    .required('Width is a required field'),
  height: yup
    .number()
    .typeError('Count must be a `number` type')
    .required('Height is a required field'),
  weight: yup
    .number()
    .typeError('Count must be a `number` type')
    .required('weight is a required field'),
  price: yup
    .number()
    .typeError('Count must be a `number` type')
    .required('weight is a required field'),
});

const EditInfo: React.FC<OwnType> = ({ item, setEditMode }) => {
  const [flag, setFlag] = useState<boolean>(false);
  const { editItem } = useStore('ItemProductState');
  const { css } = useFela();

  // для для плавности появления и демонтирования компоненты
  useEffect(() => {
    setFlag(true);
  }, []);

  const metod = useForm<FormType>({
    defaultValues: {
      name: item.name,
      count: item.count,
      width: item.size.width,
      height: item.size.height,
      weight: item.weight,
      price: item.price,
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { reset } = metod;

  const closeModal = () => {
    setFlag(false);
    reset();
    setTimeout(setEditMode, 600, false);
  };

  const seveEditInfo = (data: FormType) => {
    const chengedItem: GoodsItemType = {
      id: item.id,
      imageUrl: 'https://picsum.photos/300/300',
      name: data.name,
      count: data.count,
      size: {
        width: data.width,
        height: data.height,
      },
      weight: data.weight,
      price: data.price,
      type: item.type,
      brand: item.brand,
    };

    editItem(chengedItem, item.id);
    closeModal();
    // если не использовать внутренний "flag" для открытия и закрытия модалки
    // reset({
    //   name: data.name,
    //   count: data.count,
    //   width: data.width,
    //   height: data.height,
    //   weight: data.weight,
    // });
    // setEditMode(false);
  };

  return (
    <div className={css(EditModal(flag))}>
      <div className={css(EditModalContent(flag))}>
        <FormProvider {...metod}>
          <form onSubmit={metod.handleSubmit(seveEditInfo)}>
            <CustomInput name="name" />
            <CustomInput name="count" />
            <CustomInput name="width" />
            <CustomInput name="height" />
            <CustomInput name="weight" />
            <CustomInput name="price" />

            <div className={css(ButtonBlock)}>
              <button type="submit">Save</button>
              <button
                type="button"
                // если не использовать внутренний "flag" для открытия и закрытия модалки
                // onClick={() => {
                //   setEditMode(false);
                //   reset();
                // }}
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default EditInfo;

//! Controller&CustomInput
// import React, { Dispatch, SetStateAction } from 'react';
// import { useFela } from 'react-fela';
// import useStore from '../../hooks/useStore';
// import { Controller, useForm } from 'react-hook-form';
// import { ButtonBlock, EditModal, EditModalContent } from './EditInfo.style';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import CustomInputs from '../CustomInputs';

// type OwnType = {
//   item: GoodsItemType;
//   editMode: boolean;
//   setEditMode: Dispatch<SetStateAction<boolean>>;
// };

// const schema = yup.object().shape({
//   name: yup.string().required('Name is a required field'),
//   count: yup.string().required('Count is a required field'),
//   width: yup.string().required('Width is a required field'),
//   height: yup.string().required('Height is a required field'),
//   weight: yup.string().required('weight is a required field'),
// });

// const EditInfo: React.FC<OwnType> = ({ item, editMode, setEditMode }) => {
//   const { editItem } = useStore('ItemProductState');
//   const { css } = useFela();
//   const {
//     handleSubmit,
//     control,
//     //formState: { errors },
//   } = useForm({
//     defaultValues: {
//       name: item.name,
//       count: item.count,
//       width: item.size.width,
//       height: item.size.height,
//       weight: item.weight,
//     },
//     mode: 'onChange',
//     resolver: yupResolver(schema),
//   });

//   const seveEditInfo = (data: FormType) => {
//     const chengedItem: GoodsItemType = {
//       id: item.id,
//       imageUrl: 'https://picsum.photos/300/300',
//       name: data.name,
//       count: data.count,
//       size: {
//         width: data.width,
//         height: data.height,
//       },
//       weight: data.weight,
//     };

//     editItem(chengedItem, item.id);
//     setEditMode(false);
//   };

//   return (
//     <div className={css(EditModal(editMode))}>
//       <div className={css(EditModalContent(editMode))}>
//         <form onSubmit={handleSubmit(seveEditInfo)}>
//           <Controller
//             name="count"
//             control={control}
//             render={({ field, fieldState: { error } }) => (
//               <CustomInputs {...field} error={error?.message} />
//             )}
//           />

//           <div className={css(ButtonBlock)}>
//             <button type="submit">Save</button>
//             <button type="button" onClick={() => setEditMode(false)}>
//               Close
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditInfo;

//! Register&CustomInput
// import React, { Dispatch, SetStateAction } from 'react';
// import { useFela } from 'react-fela';
// import useStore from '../../hooks/useStore';
// import { useForm } from 'react-hook-form';
// import { ButtonBlock, EditModal, EditModalContent } from './EditInfo.style';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import CustomInputs from '../CustomInputs';

// type OwnType = {
//   item: GoodsItemType;
//   editMode: boolean;
//   setEditMode: Dispatch<SetStateAction<boolean>>;
// };

// const schema = yup.object().shape({
//   name: yup.string().required('Name is a required field'),
//   count: yup.string().required('Count is a required field'),
//   width: yup.string().required('Width is a required field'),
//   height: yup.string().required('Height is a required field'),
//   weight: yup.string().required('weight is a required field'),
//   asd: yup.string().required('asd is a required field'),
// });

// const EditInfo: React.FC<OwnType> = ({ item, editMode, setEditMode }) => {
//   const { editItem } = useStore('ItemProductState');
//   const { css } = useFela();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     defaultValues: {
//       name: item.name,
//       count: item.count,
//       width: item.size.width,
//       height: item.size.height,
//       weight: item.weight,
//       asd: item.name,
//     },
//     mode: 'onChange',
//     resolver: yupResolver(schema),
//   });

//   const seveEditInfo = (data: any) => {
//     const chengedItem: GoodsItemType = {
//       id: item.id,
//       imageUrl: 'https://picsum.photos/300/300',
//       name: data.name,
//       count: data.count,
//       size: {
//         width: data.width,
//         height: data.height,
//       },
//       weight: data.weight,
//     };

//     editItem(chengedItem, item.id);
//     setEditMode(false);

//     reset({
//       name: data.name,
//       count: data.count,
//       width: data.width,
//       height: data.height,
//       weight: data.weight,
//     });
//   };

//   return (
//     <div className={css(EditModal(editMode))}>
//       <div className={css(EditModalContent(editMode))}>
//         <form onSubmit={handleSubmit(seveEditInfo)}>
//           <CustomInputs {...register('name')} error={errors?.name?.message} />
//           <CustomInputs {...register('count')} error={errors?.count?.message} />
//           <CustomInputs {...register('width')} error={errors?.width?.message} />
//           <CustomInputs
//             {...register('height')}
//             error={errors?.height?.message}
//           />
//           <CustomInputs
//             {...register('weight')}
//             error={errors?.weight?.message}
//           />

//           {/* <div className={css(error(!!errors?.name?.message))}>
//             <label htmlFor="name">
//               name
//               <input {...register('name')} id="name" />
//             </label>
//             {!!errors.name ? errors.name.message : null}
//           </div> */}

//           <div className={css(ButtonBlock)}>
//             <button type="submit">Save</button>
//             <button
//               type="button"
//               onClick={() => {
//                 setEditMode(false);
//                 reset();
//               }}
//             >
//               Close
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditInfo;
