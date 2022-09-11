import { View, Text } from 'react-native'
import React from 'react'
import { TailwindProvider } from 'tailwind-rn/dist';
const HomeScreen = () => {
  return (

    <TailwindProvider>
    <View>
      <Text className="text-red-500">HomeScreen</Text>
    </View>
    </TailwindProvider>
  )
}

export default HomeScreen