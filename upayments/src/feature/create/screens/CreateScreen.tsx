import React from 'react';
import { Box, FlatList } from 'native-base';
import { ActivityIndicator, ListRenderItemInfo } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Container } from '../components';
import { usePostProduct } from '../services';
import { CategoryType } from '../../home/types';
import { UPayText } from '../../../ui/core/text';
import { UPayInput } from '../../../ui/core/input';
import { useCategories } from '../../home/services';
import { UpayButton } from '../../../ui/core/button';
import { CategoryChip, Header } from '../../home/components';
import { MainStack } from '../../../navigation/stacks/types';
import { useHomeContext } from '../../../contexts/HomeContext';
import { CategoriesType } from '../../../utils/constants/CategoryType';
import { createProduct, selectCategory } from '../../../utils/constants/Strings';
import { calculatePixel, isDataValid, showToast } from '../../../utils/common-functions';

type Navigation = NavigationProp<MainStack, 'Create'>;

export const CreateScreen: React.FC = () => {
  const { goBack } = useNavigation<Navigation>();

  const { setIsProductAdded } = useHomeContext();

  const {
    data: categoriesData
  } = useCategories(); // Fetching the categories from server

  const {
    mutateAsync,
    isLoading: isProductDataPosting,
  } = usePostProduct(); // Posting newly added product to server

  const [product, setProduct] = React.useState({
    name: '',
    nameError: false,
    price: '',
    priceError: false,
    description: '',
    descriptionError: false,
    image: '',
    imageError: false
  });
  const [selectedCategory, setSelectedCategory] = React.useState<CategoryType>({ index: -1, name: '' });

  const validateInput = () => {
    if (isDataValid(product.name.trim())) {
      if (isDataValid(product.price.trim())) {
        if (isDataValid(product.description.trim())) {
          if (isDataValid(product.image.trim())) {
            if (isDataValid(selectedCategory.name)) {
              addProduct();
            } else {
              showToast('error', 'Please select atleast one category')
            }
          } else {
            setProduct(Object.assign({}, product, {
              imageError: true,
            }))
          }
        } else {
          setProduct(Object.assign({}, product, {
            descriptionError: true,
          }))
        }
      } else {
        setProduct(Object.assign({}, product, {
          priceError: true,
        }))
      }
    } else {
      setProduct(Object.assign({}, product, {
        nameError: true,
      }))
    }
    return false;
  }

  const addProduct = () => {
    const productObj = {
      "name": product.name,
      "avatar": product.image,
      "description": product.description,
      "price": parseFloat(product.price),
      "category": selectedCategory.name,
      "developerEmail": "kawaljeetsbagga@gmail.com",
      "createdAt": new Date(Date.now()).toISOString(),
      "updatedAt": new Date(Date.now()).toISOString(),
    }
    mutateAsync(productObj).then(() => { setIsProductAdded('added'), goBack() })
  }

  const selectedCategoryHandler = (category: CategoryType) => {
    setSelectedCategory(category);
  }

  const renderCategories = ({ item: category, index: categoryIndex }: ListRenderItemInfo<CategoriesType>) =>
    <CategoryChip
      isInverted
      category={category}
      currentIndex={categoryIndex}
      selectedCategory={selectedCategory}
      setSelectedCategory={selectedCategoryHandler} />;

  const setInputValues = (key: string, text: string) => {
    switch (key) {
      case 'name': setProduct(Object.assign({}, product, {
        name: text,
        nameError: false
      }))
        break;
      case 'price': setProduct(Object.assign({}, product, {
        price: text,
        priceError: false
      }))
        break;
      case 'description': setProduct(Object.assign({}, product, {
        description: text,
        descriptionError: false
      }))
        break;
      case 'image': setProduct(Object.assign({}, product, {
        image: text,
        imageError: false
      }))
        break;
    }
  }

  if (isProductDataPosting) {
    return <ActivityIndicator
      size="large"
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
      }}
    />
  }

  return (
    <Container>
      <Box marginX={calculatePixel('width', 10)}>
        <Header goBack={goBack} showBackIcon label={createProduct} />
      </Box>
      <KeyboardAwareScrollView keyboardShouldPersistTaps='handled'>
        <Box flex={1} margin={calculatePixel('width', 20)}>
          <UPayInput
            contentType='name'
            value={product.name}
            error={product.nameError}
            onChangeText={(text) => setInputValues('name', text)} />
          <UPayInput
            contentType='price'
            value={product.price}
            keyboardType={'numeric'}
            error={product.priceError}
            onChangeText={(text) => setInputValues('price', text)} />
          <UPayInput
            contentType='description'
            value={product.description}
            error={product.descriptionError}
            onChangeText={(text) => setInputValues('description', text)} />
          <UPayInput
            contentType='image'
            value={product.image}
            error={product.imageError}
            onChangeText={(text) => setInputValues('image', text)} />
          <UPayText variant='h4'>{selectCategory}: {selectedCategory.name}</UPayText>
          <FlatList             // Category chips
            horizontal
            renderItem={renderCategories}
            data={categoriesData?.data.categories}
            showsHorizontalScrollIndicator={false}
          />
        </Box>
      </KeyboardAwareScrollView>
      <Box
        mb={calculatePixel('height', 20)}
        paddingX={calculatePixel('width', 20)}>
        <UpayButton
          variant='medium'
          label='Add product'
          onPress={() => { validateInput() }} />
      </Box>
    </Container>
  );
};