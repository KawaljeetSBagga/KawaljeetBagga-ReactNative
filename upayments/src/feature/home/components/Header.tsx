import React from 'react';
import { Box } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { UPayText } from '../../../ui/core/text';
import { BackIcon, SearchIcon } from '../../../assets/svg';
import { showToast, calculatePixel } from '../../../utils/common-functions';

interface IHeaderProps {
  goBack?: any;
  label: string;
  showBackIcon?: boolean;
  showSearchIcon?: boolean;
}

export const Header: React.FC<IHeaderProps> = (props) => {

  const { label, goBack, showBackIcon = false, showSearchIcon = false } = props;

  return (
    <Box paddingX={calculatePixel('width', 10)}>
      <Box
        flexDir={'row'}
        alignItems='center'
        justifyContent={showBackIcon ? 'flex-start' : 'space-between'}>
        {showBackIcon && <TouchableOpacity
          onPress={() => { goBack() }}>
          <BackIcon />
        </TouchableOpacity>}
        <UPayText
          variant='h2Bold'
          ml={showBackIcon ? calculatePixel('width', 10) : 0}>
          {label}
        </UPayText>
        {showSearchIcon && <TouchableOpacity
          onPress={() => showToast('info', 'Coming soon')}>
          <SearchIcon />
        </TouchableOpacity>}
      </Box>
    </Box>
  );
};
