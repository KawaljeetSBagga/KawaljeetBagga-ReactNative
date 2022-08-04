import React from 'react';
import { Box } from 'native-base';
import { useWindowDimensions } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { UpayButton } from '../../../ui/core/button';
import { MainStack } from '../../../navigation/stacks/types';
import { calculatePixel } from '../../../utils/common-functions';

interface ICreateProduct { }

type Navigation = NavigationProp<MainStack, 'Home'>;

export const CreateProduct: React.FC<ICreateProduct> = () => {

  const { height } = useWindowDimensions();

  const { navigate } = useNavigation<Navigation>();

  const createProductHandler = () => {
    navigate('Create');
  }

  return (
    <Box
      right={0}
      top={height / 1.12}
      position={'absolute'}
      paddingX={calculatePixel('width', 10)}>
      <UpayButton
        label='+'
        bordered
        variant='floating'
        onPress={createProductHandler} />
    </Box>
  );
};
