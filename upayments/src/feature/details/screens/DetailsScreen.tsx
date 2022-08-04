import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Box, Image, ScrollView } from 'native-base';
import { RouteProp, useRoute } from '@react-navigation/native';

import { useProduct } from '../services';
import { SkeletonLoader } from '../components';
import { UPayText } from '../../../ui/core/text';
import { Container } from '../../create/components';
import { DescriptionBox } from '../../home/components';
import { COLORS } from '../../../ui/theme/components/Colors';
import { MainStack } from '../../../navigation/stacks/types';
import { calculatePixel } from '../../../utils/common-functions';
import { PRODUCT_CARD_PADDING, PRODUCT_PLACEHOLDER_PADDING } from '../../../utils/constants/Strings';

export const DetailsScreen: React.FC = () => {

  const { width, height } = useWindowDimensions();

  const { params } = useRoute<RouteProp<MainStack, 'Details'>>();

  const { productId } = params;

  const {
    data: productData,
    isFetching: isProductFetching
  } = useProduct(productId);

  if (isProductFetching) {
    return <SkeletonLoader />;
  }

  const IMAGE_WIDTH = calculatePixel('width', width - PRODUCT_CARD_PADDING);
  const IMAGE_HEIGHT = calculatePixel('width', width - PRODUCT_PLACEHOLDER_PADDING);

  return (
    <Container>
      <Box
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        padding={calculatePixel('width', 10)}>
        <Image
          resizeMode='contain'
          alt={'No image available'}
          width={calculatePixel('width', width)}
          height={calculatePixel('height', width / 1.5)}
          source={{ uri: productData?.data?.product.avatar }} />
      </Box>
      <UPayText
        variant='h3Bold'
        numberOfLines={4}
        color={COLORS.black90}
        mb={calculatePixel('width', 10)}
        marginX={calculatePixel('width', 20)}>
        {productData?.data?.product.name}
      </UPayText>
      <DescriptionBox>
        <Box
          paddingX={calculatePixel('width', 20)}
          height={calculatePixel('height', height)}>
          <Box
            flexDir={'row'}
            justifyContent={'space-between'}>
            <UPayText
              variant='h3Bold'
              color={COLORS.white}
              width={calculatePixel('width', width / 2)}>
              Ratings:{' '}
              <UPayText
              variant='h3Bold'
              color={COLORS.mainYellow}>
              ★★★★
            </UPayText>
            </UPayText>
            <UPayText
              variant='h3Bold'
              color={COLORS.white}>
              ${productData?.data?.product.price}
            </UPayText>
          </Box>
          <ScrollView
            mb={calculatePixel('height', height / 1.5)}
            showsVerticalScrollIndicator={false}>
            <UPayText
              variant='body4'
              color={COLORS.white}>
              {productData?.data?.product.description}
            </UPayText>
          </ScrollView>
        </Box>
      </DescriptionBox>
    </Container>
  );
};
