import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Input } from "native-base";
import FastImage from "react-native-fast-image";
import { icons } from "../../../constants";
import tw from "twrnc";

const SearchHeader = ({ data, setCountyNames }) => {
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   // Filter data when the search value changes
  //   const filteredData = searchFilter(data, search);
  //   setCountyNames(filteredData);
  // }, [search, data, setCountyNames]); 
  const handleSearchChange = (value) => {
    setSearch(value);
  };
  return (
    <View style={tw`flex flex-row items-center bg-white p-2`}>
      <View style={tw`w-[80%] bg-gray-100 rounded-md relative left-[10px]`}>
        <Input
          placeholder="Search county..."
          onChangeText={handleSearchChange}
          value={search}
          autoCapitalize="none"
          variant="unstyled"
          returnKeyType="done"
          style={tw`text-black text-[14px]`}
        />
      </View>
      <Image
        source={icons.search}
        style={tw`w-[20px] h-[20px] relative left-[-30px]`}
        resizeMode="contain"
        tintColor="black"
        alt="image"
      />
      <TouchableOpacity>
        <Image
          source={icons.menu1}
          style={tw`w-[30px] h-[30px] relative left-[8px]`}
          resizeMode="contain"
          tintColor="black"
          alt="image"
        />
      </TouchableOpacity>
    </View>
  );
};

const searchFilter = (data, searchQuery) => {
  if (!searchQuery) {
    return data;
  }

  const regex = new RegExp(searchQuery, "i");

  return data.filter((item) => {
    for (const key in item) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        const value = item[key];
        if (typeof value === "string" && regex.test(value)) {
          return true;
        }
      }
    }
    return false;
  });
};

export default SearchHeader;
