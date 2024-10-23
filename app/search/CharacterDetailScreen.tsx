import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { Character } from '@/types/RickAndMortyTypes/Character'; // Adjust the import path as necessary
import { RouteProp, useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons'; // Ensure this import is present

interface CharacterDetailScreenProps {
  route: any;
}

const colorMap: Record<string, string> = {
  dead: 'bg-rose-700/80',
  alive: 'bg-emerald-500/80',
  unknown: 'bg-neutral-600/80'
};

const CharacterDetailScreen: React.FC<CharacterDetailScreenProps> = ({
  route
}) => {
  const navigation = useNavigation();
  const { character } = route.params;
  const backgroundColor = character
    ? colorMap[character.status.toLowerCase()] || 'bg-gray-500'
    : 'bg-gray-500';

  return (
    <View
      className={`flex-1 justify-center items-center p-4 ${backgroundColor}`}
    >
      <TouchableOpacity
        className="absolute top-14 left-4 flex-row items-center"
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={30} color="black" />
        <Text className="ml-2 text-lg font-semibold text-black">Back</Text>
      </TouchableOpacity>
      <View className="flex flex-col items-start pt-10 pb-5 px-10 bg-white rounded-lg w-full">
        <View
          className="flex flex-row justify-between items-center
         mb-4"
        >
          <Image
            source={{ uri: character.image }}
            className="w-32 h-32 rounded-lg"
          />
          <Text className="text-xl font-bold text-gray-900 ml-4 w-1/2 break-words text-center">
            {character.name}
          </Text>
        </View>
        <View className="flex flex-col">
          <View className="flex flex-row items-center mb-4">
            <Text className="text-sm font-medium text-gray-700">Status:</Text>
            <Text className="text-sm font-medium text-gray-900 ml-2">
              {character.status}
            </Text>
          </View>
          <View className="flex flex-row items-center mb-4">
            <Text className="text-sm font-medium text-gray-700">Species:</Text>
            <Text className="text-sm font-medium text-gray-900 ml-2">
              {character.species}
            </Text>
          </View>
          <View className="flex flex-row items-center mb-4">
            <Text className="text-sm font-medium text-gray-700">Gender:</Text>
            <Text className="text-sm font-medium text-gray-900 ml-2">
              {character.gender}
            </Text>
          </View>
          <View className="flex flex-row items-center mb-4">
            <Text className="text-sm font-medium text-gray-700">Origin:</Text>
            <Text className="text-sm font-medium text-gray-900 ml-2">
              {character.origin.name}
            </Text>
          </View>
          <View className="flex flex-row items-center mb-4">
            <Text className="text-sm font-medium text-gray-700">Location:</Text>
            <Text className="text-sm font-medium text-gray-900 ml-2">
              {character.location.name}
            </Text>
          </View>
          <View className="flex flex-row items-center mb-4">
            <Text className="text-sm font-medium text-gray-700">Created:</Text>
            <Text className="text-sm font-medium text-gray-900 ml-2">
              {new Date(character.created).toLocaleDateString()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CharacterDetailScreen;
