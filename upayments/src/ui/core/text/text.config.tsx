import { ITextProps } from 'native-base';

import { TextVariant } from './text.types';

const fontVariants = {
  thin: 'Inter-Thin',
  bold: 'Inter-Bold',
  black: 'Inter-Black',
  light: 'Inter-Light',
  medium: 'Inter-Medium',
  regular: 'Inter-Regular',
  semiBold: 'Inter-SemiBold',
  extraBold: 'Inter-ExtraBold',
};

export const TextConfigMap = new Map<TextVariant, ITextProps>([
  [
    'h1',
    {
      fontSize: '4xl',
      letterSpacing: -0.48,
      fontFamily: fontVariants.extraBold,
    },
  ],
  [
    'h2',
    {
      fontSize: '3xl',
      letterSpacing: -0.48,
      fontFamily: fontVariants.extraBold,
    },
  ],
  [
    'h3',
    {
      fontSize: 'xl',
      letterSpacing: -0.48,
      fontFamily: fontVariants.extraBold,
    },
  ],
  [
    'h4',
    {
      fontSize: 16,
      letterSpacing: -0.48,
      fontFamily: fontVariants.medium,
    },
  ],
  [
    'h5',
    {
      fontSize: 14,
      letterSpacing: -0.48,
      fontFamily: fontVariants.bold,
    },
  ],
  [
    'h6',
    {
      fontSize: 12,
      letterSpacing: -0.1,
      fontFamily: fontVariants.bold,
    },
  ],
  [
    'body1',
    {
      fontSize: 22,
      fontFamily: fontVariants.regular,
    },
  ],
  [
    'body2',
    {
      fontSize: 20,
      letterSpacing: -0.01,
      fontFamily: fontVariants.semiBold,
    },
  ],
  [
    'body3',
    {
      fontSize: 18,
      letterSpacing: -0.01,
      fontFamily: fontVariants.semiBold,
    },
  ],
  [
    'body4',
    {
      fontSize: 16,
      letterSpacing: -0.32,
      fontFamily: fontVariants.regular,
    },
  ],
  [
    'body5',
    {
      fontSize: 14,
      letterSpacing: -0.16,
      fontFamily: fontVariants.regular,
    },
  ],
  [
    'body6',
    {
      fontSize: 12,
      letterSpacing: -0.01,
      fontFamily: fontVariants.regular,
    },
  ],
  [
    'h2Bold',
    {
      fontSize: 24,
      fontWeight: 900,
      letterSpacing: -0.48,
      fontFamily: fontVariants.extraBold,
    },
  ],
  [
    'h3Bold',
    {
      fontSize: 22,
      fontWeight: 900,
      letterSpacing: -0.48,
      fontFamily: fontVariants.extraBold,
    },
  ],
]);
