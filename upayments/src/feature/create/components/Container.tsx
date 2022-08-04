import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';

interface IContainer {
  children: ReactNode;
}

export const Container: React.FC<IContainer> = ({ children }) => {

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: 'white'
    }}>
      {children}
    </SafeAreaView>
  );
};
