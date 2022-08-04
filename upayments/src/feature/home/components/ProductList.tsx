import React from 'react';
import { FlatList } from 'native-base';
import { ListRenderItemInfo } from 'react-native';

import { ProductCard } from '../components';
import { useHomeContext } from '../../../contexts/HomeContext';
import { calculatePixel } from '../../../utils/common-functions';
import { CategoryType, ProductType, StateProductType } from '../types';
import { THRESHOLD_BOTTOM_PADDING } from '../../../utils/constants/Strings';

interface IProductListProps {
  selectedCategory: CategoryType;
  filteredProductList: StateProductType;
}

export const ProductList: React.FC<IProductListProps> = ({ selectedCategory, filteredProductList }) => {

  const { homeState, setIsProductAdded } = useHomeContext();
  const [productList, setProductList] = React.useState<StateProductType | []>(filteredProductList);

  const setFilter = (productsData: StateProductType) => {
    setProductList([]); // Flush the list before assigning data to avoid redundant records
    setProductList(productsData);
  }

  React.useMemo(() => {
    if (homeState.isProductAdded === 'done') {
      selectedCategory.name !== 'All'
        ? filteredProductList
        && setFilter(filteredProductList.filter((value: ProductType) => {
          return selectedCategory.name === value.category
        }))
        : setProductList(filteredProductList);
    } else {
      setIsProductAdded('done');
      setProductList(filteredProductList);
    }
  }, [selectedCategory]);

  const renderProducts = ({ item: product }: ListRenderItemInfo<ProductType>) =>
    <ProductCard product={product} />;

  return (
    <>
    <FlatList             // Products list
      numColumns={2}
      renderItem={renderProducts}
      mx={calculatePixel('width', 10)}
      showsVerticalScrollIndicator={false}
      mb={calculatePixel('height', THRESHOLD_BOTTOM_PADDING)}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      data={homeState.isProductAdded === 'done' ? productList : filteredProductList}
    />
    </>
  );
};
