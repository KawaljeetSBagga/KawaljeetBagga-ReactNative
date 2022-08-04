import React from 'react';
import { Box, Skeleton } from 'native-base';
import { SafeAreaView, useWindowDimensions } from 'react-native';

import { calculatePixel } from '../../../utils/common-functions';

export const SkeletonLoader = () => {
  const { width } = useWindowDimensions();

  const renderProductPlaceholder = () => (
    <Box padding={calculatePixel('width', 20)}>
      <Skeleton
        w={calculatePixel('width', width - 100)}
        h={calculatePixel('height', width - 100)}
      >
      </Skeleton>
      <Skeleton
        w={calculatePixel('width', width / 2)}
        h={calculatePixel('height', 20)}
        my={calculatePixel('width', 10)}
      />
      <Skeleton
        w={calculatePixel('width', width - 100)}
        h={calculatePixel('height', 20)}
        my={calculatePixel('width', 10)}
      />
    </Box>
  )

  const renderProductsLoader = () => (
    <Box
      mx={calculatePixel('width', 10)}
      my={calculatePixel('width', 10)}>
      {renderProductPlaceholder()}
    </Box>
  )

  return (
    <SafeAreaView>
      {renderProductsLoader()}
    </SafeAreaView>
  );
};
