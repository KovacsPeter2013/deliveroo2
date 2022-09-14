import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { TailwindProvider } from "tailwind-rn/dist";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      //headerTitle:"Teszt"
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-10 w-10 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">
            Szállítás most
          </Text>
          <Text className="font-bold text-xl">
            Előző lokáció
            <ChevronDownIcon size={20} color="gray">
              asdsd
            </ChevronDownIcon>
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB">
          asdsad
        </UserIcon>
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3 ">
          {/*<SearchIcon />*/}
          <TextInput placeholder="keresés" keyboardType="default" />
        </View>

        <AdjustmentsIcon color="#00CCBB" />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />

        <FeaturedRow
          id="123"
          title="Kiemelt"
          description="Ide kerülnek a partnerek kiemelt hirdetései"
          featuredCategory="kiemelt"
        />

        <FeaturedRow
          id="12qwew3"
          title="Ízletes diszkont"
          description="Ide kerülnek a partnerek kiemelt hirdetései"
          featuredCategory="diszkont"
        />

        <FeaturedRow
          id="12erer3"
          title="Ajánlat a közeledben"
          description="Ide kerülnek a partnerek kiemelt hirdetései"
          featuredCategory="ajánlat"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
