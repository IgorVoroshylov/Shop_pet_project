import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { useFela } from 'react-fela';
import useStore from '../../hooks/useStore';
import AddBrand from './AddBrandModal';
import AddDeviceModal from './AddDeviceModal';
import AddType from './AddTypeModal';
import { AdminContainer, AdminTitle, ButtonContainer } from './admin.style';
import Button from './Button/Button';

const Admin: React.FC = () => {
  const { css } = useFela();
  const [addDeviceModal, setAddDeviceModal] = useState<boolean>(false);
  const [addTypeModal, setAddTypeModal] = useState<boolean>(false);
  const [addBrandModal, setAddBrandModal] = useState<boolean>(false);
  const { brands, types, getBrands, getTypes } = useStore('AppState');

  useEffect(() => {
    getBrands();
    getTypes();
  }, [getBrands, getTypes]);

  return (
    <div className={css(AdminContainer)}>
      <h1 className={css(AdminTitle)}>Admin Panel</h1>

      {addDeviceModal && (
        <AddDeviceModal
          setAddDeviceModal={setAddDeviceModal}
          types={types}
          brands={brands}
        />
      )}
      {addBrandModal && <AddBrand setAddBrandModal={setAddBrandModal} />}
      {addTypeModal && <AddType setAddTypeModal={setAddTypeModal} />}

      <div className={css(ButtonContainer)}>
        <Button callback={setAddTypeModal}>Add Type</Button>
        <Button callback={setAddBrandModal}>Add Brand</Button>
        <Button callback={setAddDeviceModal}>Add Device</Button>
      </div>
    </div>
  );
};

export default observer(Admin);
