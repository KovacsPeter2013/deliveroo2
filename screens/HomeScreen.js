import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { TailwindProvider } from 'tailwind-rn/dist';
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {

        navigation.setOptions({
            //headerTitle:"Teszt"
            headerShown: false,
        })
    
    }, [])

  return (

   <SafeAreaView>
    <View>
      <Text className="text-red-500">HomeScreen</Text>

    <View>
        <Image
            source = {{
                uri:'https://links.papareact.com/wru'
            }}
            className = 'h-7 w-7 bg-gray-300 rounded-full'
        />
    </View>


    <View>
        <Text className="font-bold text-gray-400 text-xs">Szállítás most</Text>
        <Text className="font-bold text-xl">Előző lokáció</Text>
    </View>


    </View>
    </SafeAreaView>
  )
}

export default HomeScreen