export type CategoriesType = {
  _id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  __v: number,
}

export type CategoryListType = {
  message: string,
  categories: [
    {
      _id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      __v: number,
    }
  ]
}