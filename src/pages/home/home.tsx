import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../component/button';

function Home () {
  return (
    <View className="w-full h-full flex flex-col justify-start items-center p-4">
      <Text className="text-2xl mb-5">Категории</Text>
      <Button className="w-full" title="Животные"/>
    </View>
  )
}

export default Home;