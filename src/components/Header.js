import React from 'react';
import {Text, View} from 'react-native';
import {style} from './style';

export default props => {
  return (
    <View style={style.header}>
      <Text style={style.fontG}>Academy Task Hub</Text>
    </View>
  );
};
