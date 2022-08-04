export type CategoryType = {
  index: number;
  name: string;
}

export type ProductType = {
  _id: string,
  name: string,
  avatar: string,
  description: string,
  price: number,
  category: string,
  developerEmail: string,
  createdAt: string,
  updatedAt: string,
  __v: number,
}

export type AddProductType = {
  name: string;
  avatar: string;
  description: string;
  price: number;
  category: string;
  developerEmail: string;
  createdAt: string;
  updatedAt: string;
}

export type ProductListType = {
  message: string,
  products: [
    {
      _id: string,
      name: string,
      avatar: string,
      description: string,
      price: number,
      category: string,
      developerEmail: string,
      createdAt: string,
      updatedAt: string,
      __v: number,
    }
  ]
}

export type StateProductType = ProductType[] | [] | null | undefined;