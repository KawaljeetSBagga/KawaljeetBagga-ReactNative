import React, { useState } from 'react';
import { KeyboardType } from 'react-native';
import { Box, FormControl, IInputProps, Input } from 'native-base';

import { UPayText } from '../text';
import { InputConfigMap, InputType } from './types';
import { COLORS } from '../../theme/components/Colors';
import { calculatePixel } from '../../../utils/common-functions';

interface AuthInputProps extends IInputProps {
  contentType: InputType;
  error?: string | boolean;
  keyboardType?: KeyboardType;
}

export const UPayInput: React.FC<AuthInputProps> = ({
  error,
  contentType,
  keyboardType = 'default',
  ...props
}) => {

  const [focused, setFocused] = useState<boolean>(false);

  const renderColor = () => {
    if (error) {
      return 'mainRed';
    }
    if (focused && !error) {
      return 'mainBlue';
    }

    return 'grey70';
  };

  return (
    <FormControl pt="1 ">
      <UPayText
        variant="h4"
        color={renderColor()}>
        {InputConfigMap.get(contentType)?.label}
      </UPayText>

      <Input
        {...props}
        bg="white"
        color="black70"
        borderWidth={0}
        paddingLeft={-1}
        borderRadius={0}
        backgroundColor="white"
        textDecorationLine="none"
        keyboardType={keyboardType}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        placeholderTextColor={COLORS.grey20}
        placeholder={InputConfigMap.get(contentType)?.placeholder}
      />
      <Box marginTop={calculatePixel('height', 10)} />
      <Box height={'1px'} bg={renderColor()} />
      <FormControl.HelperText>
        <UPayText
          color="mainRed"
          letterSpacing="-0.16px"
          variant="body6"
          fontWeight={400}
        >
          {error}
        </UPayText>
      </FormControl.HelperText>
    </FormControl>
  );
};
