import React, { forwardRef } from 'react';
import { Text as BaseText, ITextProps } from 'native-base';

import { TextVariant } from './text.types';
import { TextConfigMap } from './text.config';

export interface TextProps extends ITextProps {
  children: React.ReactNode;
  variant: TextVariant;
}

export const UPayText: React.FC<TextProps> = forwardRef(
  ({ children, variant, ...props }, ref) => {
    const textColor = props.color || 'black';

    return (
      <BaseText
        ref={ref}
        {...props}
        color={textColor}
        {...TextConfigMap.get(variant)}
      >
        {children}
      </BaseText>
    );
  }
);
