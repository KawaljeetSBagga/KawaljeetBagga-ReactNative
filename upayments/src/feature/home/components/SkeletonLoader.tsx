import React from 'react';
import { Box, Skeleton } from 'native-base';
import { SafeAreaView, useWindowDimensions } from 'react-native';

import { COLORS } from '../../../ui/theme/components/Colors';
import { PRODUCT_PLACEHOLDER_PADDING } from '../../../utils/constants/Strings';
import { calculatePixel, calculatePixelNumber } from '../../../utils/common-functions';

export const SkeletonLoader = () => {
  const { width } = useWindowDimensions();

  const CARD_WIDTH = calculatePixelNumber('width', width / 2 - PRODUCT_PLACEHOLDER_PADDING);

  const renderProductPlaceholder = () => (
    <Box
      borderRadius={12}
      borderWidth={0.5}
      borderColor={COLORS.grey20}>
      <Skeleton
        padding={calculatePixel('width', 5)}
        w={calculatePixel('width', CARD_WIDTH)}
        h={calculatePixel('height', CARD_WIDTH)}
      >
      </Skeleton>
      <Skeleton
        w={calculatePixel('width', 48)}
        h={calculatePixel('height', 18)}
        padding={calculatePixel('width', 5)}
      />
      <Skeleton
        w={calculatePixel('width', 48)}
        h={calculatePixel('height', 18)}
        padding={calculatePixel('width', 5)}
      />
    </Box>
  )

  const renderProductsLoader = () => (
    <Box
      flexDir={'row'}
      justifyContent={'space-around'}
      mx={calculatePixel('width', 10)}
      my={calculatePixel('width', 10)}>
      {renderProductPlaceholder()}
      {renderProductPlaceholder()}
    </Box>
  )

  return (
    <SafeAreaView>
      {renderProductsLoader()}
      {renderProductsLoader()}
      {renderProductsLoader()}
      {renderProductsLoader()}
    </SafeAreaView>
  );
};
