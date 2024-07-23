import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({title, subtitle}) => {
  return (
    <View className='items-center justify-center px-4'>
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className='text-white text-xl font-psemibold'>{title}</Text>
      <Text className='text-white font-pregular'>{subtitle}</Text>
      <CustomButton title='Create Video' containerStyles={'w-full my-5'} handlePress={() => router.push('/create')}/>
    </View>
  );
};

export default EmptyState;
