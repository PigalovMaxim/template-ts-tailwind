import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { P } from './button.setting';

function Button(props: P) {
  const { className, onPress, title, textStyle } = props;
  return (
    <TouchableOpacity
      className={"w-full h-10 bg-slate-600 flex justify-center items-center " + className}
      onPress={onPress}
    >
      <Text className={"text-white " + textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;