import React, { ReactNode } from 'react';
import { Box } from 'native-base';

import { COLORS } from '../../../ui/theme/components/Colors';

interface IDescriptionBox {
  children: ReactNode;
}

export const DescriptionBox: React.FC<IDescriptionBox> = (props) => {

  const { children } = props;

  return (
    <Box
      borderRadius={8}
      bg={COLORS.black90}
      style={{
        elevation: 2,
        shadowRadius: 10,
        shadowOpacity: 0.25,
        shadowColor: COLORS.grey70,
        shadowOffset: { width: 0, height: -30 },
      }}>
      {children}
    </Box>
  );
};