/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { LogBox } from 'react-native';
import Toast from 'react-native-toast-message';
import { NativeBaseProvider } from 'native-base';
import { QueryClientProvider } from '@tanstack/react-query';

import theme from './src/ui/theme';
import { queryClient } from './src/api/queryClient';
import AppNavigator from './src/navigation/app-navigation';
import { toastConfig } from './src/ui/theme/components/toast';

export default function App() {
  LogBox.ignoreAllLogs(true);

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <AppNavigator />
        <Toast config={toastConfig} />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
