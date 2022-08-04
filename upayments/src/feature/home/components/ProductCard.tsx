import React from 'react';
import { Box, Image } from 'native-base';
import { TouchableOpacity, useWindowDimensions } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ProductType } from '../types';
import { UPayText } from '../../../ui/core/text';
import { DescriptionBox } from './DescriptionBox';
import { MainStack } from '../../../navigation/stacks/types';
import { COLORS } from '../../../ui/theme/components/Colors';
import { calculatePixel } from '../../../utils/common-functions';
import { PRODUCT_CARD_PADDING, PRODUCT_IMAGE_PADDING, PRODUCT_PLACEHOLDER_PADDING } from '../../../utils/constants/Strings';

interface IProductCard {
  product: ProductType;
}

type Navigation = NavigationProp<MainStack, 'Home'>;

export const ProductCard: React.FC<IProductCard> = (props) => {

  const { product } = props;
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation<Navigation>();
  const CARD_WIDTH = calculatePixel('width', width / 2 - PRODUCT_CARD_PADDING);
  const IMAGE_WIDTH = calculatePixel('width', width / 2 - PRODUCT_IMAGE_PADDING);
  const IMAGE_HEIGHT = calculatePixel('width', width / 2 - PRODUCT_PLACEHOLDER_PADDING);

  const renderProductDetails = (details: string) => (
    <UPayText
      variant='body5'
      numberOfLines={1}
      color={COLORS.white}
      alignItems={'center'}
      mx={calculatePixel('width', 10)}>
      {details}
    </UPayText>
  )

  return (
    <TouchableOpacity
      onPress={() => { navigate('Details', { productId: product._id }) }}>
      <Box
        borderRadius={12}
        bg={COLORS.white}
        width={CARD_WIDTH}
        my={calculatePixel('height', 5)}>
        <Box
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          alignSelf={'center'}
        >
          <Image
            alt={'No image'}
            resizeMode='contain'
            width={IMAGE_WIDTH}
            height={IMAGE_WIDTH}
            alignSelf={'center'}
            mt={calculatePixel('width', 10)}
            mb={calculatePixel('width', 30)}
            source={{ uri: product.avatar }} />
        </Box>
        <DescriptionBox>
          {renderProductDetails(product.name)}
          {renderProductDetails(`$${product.price}`)}
        </DescriptionBox>
      </Box>
    </TouchableOpacity>
  );
};