import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import Tabs from './navigation/tabs';

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL)

export default function App() {
  return (
    <ConvexProvider client={convex}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ConvexProvider>
  );
}
