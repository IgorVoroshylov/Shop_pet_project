import React from 'react';
import { MobXProviderContext } from 'mobx-react';

const useStore = <T extends keyof StoresType>(storeKey: T) => {
  const store = React.useContext(MobXProviderContext) as StoresType;

  if (!store) {
    throw new Error('Store not fount');
  }

  return store[storeKey];
};

export default useStore;
