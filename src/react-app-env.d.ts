/// <reference types="react-scripts" />

import STORES from './state/registration';

declare global {
  type StoresType = typeof STORES;

  type GoodsItemType = {
    id: string;
    count: number;
    imageUrl: string;
    name: string;
    size: {
      width: number;
      height: number;
    };
    weight: number;
    price: number;
    // type: number;
    // brand: number;
    type: string;
    brand: string;
  };

  type PaletteType<T> = {
    dark: T;
    light: T;
  };

  type ThemeType = {
    backgroundColor: string;
    color: string;
    boxShadow: string;
    backgroundColorHover: string;
    backgroundColorFocus: string,
    colorFocus: string,
  };

  type UserType = {
    userName: string;
    email: string;
    id: number;
    userRole: string;
  };

  type BasketItem = {
    id: string;
    userBasketId: number | undefined;
    name: string;
    imageUrl: string;
    price: number;
  };

  type CommentType = {
    id: string;
    productId: string;
    description: string;
    date: string;
  };

  type OwnTypeCustomInput = {
    name: keyof FormType;
  };

  type FormType = {
    name: string;
    count: number;
    width: number;
    height: number;
    weight: number;
    price: number;
    // type: number;
    // brand: number;
    type: string;
    brand: string;
    id?: number;
  };

  type BrandAndType = {
    id: string;
    name: string;
  };
}
