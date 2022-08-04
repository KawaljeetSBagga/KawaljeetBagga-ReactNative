import React from 'react';
import { Box } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { CategoryType } from '../types';
import { UPayText } from '../../../ui/core/text';
import { COLORS } from '../../../ui/theme/components/Colors';
import { calculatePixel } from '../../../utils/common-functions';
import { CategoriesType } from '../../../utils/constants/CategoryType';

interface ICategoryChip {
  currentIndex: number;
  isInverted?: boolean;
  category: CategoriesType;
  selectedCategory: CategoryType;
  setSelectedCategory: (categoryIndex: CategoryType) => void;
}

export const CategoryChip: React.FC<ICategoryChip> = (props) => {

  const { category, isInverted = false, currentIndex, selectedCategory, setSelectedCategory } = props;

  const isCurrentIndexSelected = () => selectedCategory.index === currentIndex;

  const renderBgColor = () => {
    return isInverted
      ? isCurrentIndexSelected()
        ? COLORS.black90
        : COLORS.white
      : isCurrentIndexSelected()
        ? COLORS.white
        : COLORS.black90
  }

  const renderTextColor = () => {
    return isInverted
      ? isCurrentIndexSelected()
        ? COLORS.white
        : COLORS.black90
      : isCurrentIndexSelected()
        ? COLORS.black90
        : COLORS.white
  }

  return (
    <TouchableOpacity
      onPress={() => { setSelectedCategory({ index: currentIndex, name: category.name }) }}>
      <Box
        borderWidth={2}
        borderRadius={8}
        style={{
          elevation: 2,
          shadowRadius: 8,
          shadowOpacity: 0.5,
          shadowColor: COLORS.grey70,
          shadowOffset: { width: 1, height: 4 },
        }}
        bg={renderBgColor()}
        alignSelf={'center'}
        alignItems={'center'}
        justifyContent={'center'}
        borderColor={COLORS.black90}
        margin={calculatePixel('width', 10)}
        pb={isCurrentIndexSelected() ? calculatePixel('height', 10) : calculatePixel('height', 4)}>
        <UPayText
          alignSelf={'center'}
          textAlign={'center'}
          alignItems={'center'}
          justifyContent={'center'}
          color={renderTextColor()}
          variant={isCurrentIndexSelected() ? 'h4' : 'h5'}
          paddingX={isCurrentIndexSelected() ? calculatePixel('width', 10) : calculatePixel('width', 8)}
          paddingY={isCurrentIndexSelected() ? calculatePixel('height', 4) : calculatePixel('height', 2)}>
          {category.name}
        </UPayText>
      </Box>
    </TouchableOpacity>
  );
};