import React, { ReactNode } from 'react';
import { IPressableProps, Pressable } from 'native-base';

import { UPayText } from '../text';
import { TextVariant } from '../text/text.types';
import { calculatePixel, calculatePixelNumber } from '../../../utils/common-functions';

type ButtonType =
  | 'medium'
  | 'floating'

interface ButtonProps extends IPressableProps {
  label: string;
  subLabel?: string;
  bordered?: boolean;
  variant: ButtonType;
  isDisabled?: boolean;
  leftElement?: ReactNode;
}

type ButtonStyle = {
  height: number;
  width: string;
  textColor: string;
  buttonColor: string;
  variant: TextVariant;
  borderRadius?: number;
};

const ButtonSize: { [key in ButtonType]: ButtonStyle } = {
  medium: {
    width: `100%`,
    variant: 'h3',
    borderRadius: 8,
    textColor: 'white',
    buttonColor: 'black',
    height: calculatePixelNumber('height', 50),
  },
  floating: {
    variant: 'h2',
    borderRadius: 25,
    textColor: 'black90',
    buttonColor: 'white',
    width: `${calculatePixel('width', 50)}`,
    height: calculatePixelNumber('height', 50),
  }
};

export function UpayButton({
  label,
  subLabel,
  variant,
  bordered,
  isDisabled,
  leftElement,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      {...props}
      alignItems={'center'}
      disabled={isDisabled}
      justifyContent={'center'}
      width={ButtonSize[variant].width}
      height={ButtonSize[variant].height}
      android_ripple={{ color: 'blueDisabled' }}
      borderRadius={ButtonSize[variant].borderRadius}
      {...(bordered ? { borderWidth: 1, borderColor: 'grey20' } : {})}
      bg={isDisabled ? 'blueDisabled' : ButtonSize[variant].buttonColor}
    >
      <UPayText
        textAlign="center"
        variant={ButtonSize[variant].variant}
        color={ButtonSize[variant].textColor}
      >
        {label}
      </UPayText>
    </Pressable>
  );
}
