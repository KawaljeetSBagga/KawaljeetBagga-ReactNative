import React from 'react';
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import { ActivityIndicator } from 'react-native';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

import { MainStack } from '../stacks/types';
import { HomeContextProvider } from '../../contexts/HomeContext';
import { HomeScreen } from '../../feature/home/screens/HomeScreen';
import { CreateScreen } from '../../feature/create/screens/CreateScreen';
import { DetailsScreen } from '../../feature/details/screens/DetailsScreen';

const Loading: React.FC = () => (
  <ActivityIndicator
    size="large"
    style={{
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
    }}
  />
);

const Stack = createStackNavigator<MainStack>();

const { Navigator, Screen } = Stack;

export const AppRoutes = () => (
  <QueryErrorResetBoundary>
    {() => (
      <React.Suspense fallback={<Loading />}>
        <HomeContextProvider>
          <Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
            }}
            initialRouteName="Home" //App
          >
            <Screen
              name="Home"
              component={HomeScreen} />
            <Screen
              name="Create"
              component={CreateScreen}
              options={{
                headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
                presentation: 'modal',
                cardShadowEnabled: true,
                ...TransitionPresets.ModalSlideFromBottomIOS
              }}
            />
            <Screen
              name="Details"
              component={DetailsScreen}
              options={{
                headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
                presentation: 'modal',
                cardShadowEnabled: true,
                ...TransitionPresets.ModalSlideFromBottomIOS,
              }}
            />
          </Navigator>
        </HomeContextProvider>
      </React.Suspense>
    )}
  </QueryErrorResetBoundary>
);