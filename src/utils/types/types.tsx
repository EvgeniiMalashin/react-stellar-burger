
export type TLocation = {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  from: string;
  background: {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: null;
  };
};

export type TItem = {
  _id: string;
  name: string;
  type: "bun" | "sauce" | "main";
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  index?: number
  uuid?: number | string | any;
};

export type TSorted =  {
  item: TItem;
  count: number
};

export type TOrderItem = {
  order: TOrder;
  path: string;
};

export type TCurrentOrder = {
  number: number;
};

export type TOrder = {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  owner?: string;
  __v: number;
  _id: string;
};

export type TWsOrders = {
  orders: TOrder[];
  total: number;
  totalToday: number;
};
