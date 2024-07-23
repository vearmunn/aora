import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useState } from "react";

import { icons } from "../constants";

const SearchField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="bg-black-100 border-2 border-black-200 w-full h-14 px-4 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder="Search for a video topic..."
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
        />

        <TouchableOpacity onPress={() => {}}>
          <Image
            className="w-6 h-6 ml-4"
            resizeMode="contain"
            source={icons.search}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchField;
