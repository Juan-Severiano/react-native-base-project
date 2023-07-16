import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Header from './src/components/Header';

export default function App() {
  const style = StyleSheet.create({
    App: {
      flex: 1,
      alignItems: 'center',
    },
    img: {
      flex: 1,
      resizeMode: 'cover',
    },
  });

  return (
    <View style={style.App}>
      <Header />
      {/* <Image source={require('./assets/splash.png')} style={style.img} /> */}
      <Text>Academy Task Hub</Text>
    </View>
  );
}
