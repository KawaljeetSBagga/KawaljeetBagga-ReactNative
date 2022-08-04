import React from 'react';
import { FlatList } from 'native-base';
import { ListRenderItemInfo, SafeAreaView } from 'react-native';

import {
  Header,
  CategoryChip,
  CreateProduct,
  SkeletonLoader,
  ProductList
} from '../components';
import { CategoryType } from '../types';
import { UPayText } from '../../../ui/core/text';
import { useProducts, useCategories } from '../services';
import { COLORS } from '../../../ui/theme/components/Colors';
import { useHomeContext } from '../../../contexts/HomeContext';
import { CategoriesType } from '../../../utils/constants/CategoryType';
import { calculatePixel, isDataValid, showToast } from '../../../utils/common-functions';
import { ALL_CATEGORY_CHIP, noItems, upaymentsHeader } from '../../../utils/constants/Strings';

export const HomeScreen: React.FC = () => {

  const { homeState, setIsProductAdded } = useHomeContext();

  const { isProductAdded } = homeState;

  const {
    data: categoriesData,
    isFetching: areCategoriesFetching
  } = useCategories(); // Fetching the categories from server

  const {
    data: productsData,
    refetch: refetchProducts,
    isFetching: areProductsFetching
  } = useProducts(); // Fetching the products from server

  if (isProductAdded === 'added') {
    refetchProducts();
    setIsProductAdded('processing');
    showToast('success', 'Product added successfully!');
  }

  const [selectedCategory, setSelectedCategory] = React.useState<CategoryType>({ index: -1, name: 'All' });

  const selectedCategoryHandler = (category: CategoryType) => {
    setSelectedCategory(category);
  }

  const renderCategories = ({ item: category, index: categoryIndex }: ListRenderItemInfo<CategoriesType>) =>
    <CategoryChip
      category={category}
      currentIndex={categoryIndex}
      selectedCategory={selectedCategory}
      setSelectedCategory={selectedCategoryHandler} />;

  if (areCategoriesFetching && areProductsFetching) {
    return (
      <SafeAreaView>
        <Header label={upaymentsHeader} />
        <SkeletonLoader />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      <Header label={upaymentsHeader} showSearchIcon />
      <FlatList             // Category chips
        horizontal
        renderItem={renderCategories}
        data={categoriesData?.data.categories}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <CategoryChip
          currentIndex={-1}
          category={ALL_CATEGORY_CHIP}
          selectedCategory={selectedCategory}
          setSelectedCategory={() => {
            setSelectedCategory({ index: -1, name: 'All' })
          }} />}
        mb={calculatePixel('height', 10)}
      />
      {isDataValid(productsData)
        ? <ProductList
          selectedCategory={selectedCategory}
          filteredProductList={productsData?.data.products} />
        : <UPayText
          variant='h3'
          alignSelf={'center'}
          color={COLORS.black90}
          justifyContent={'center'}>
          {noItems}
        </UPayText>}
      <CreateProduct />
    </SafeAreaView>
  );
};
