import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '@/components/ui/Button';

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
      <Image
        source={{ uri: character.image }}
        className="w-64 h-64 rounded-lg mb-10"
      />
      <View className="flex flex-col items-center pt-10 pb-5 px-10 bg-white rounded-lg">
        <Text className="text-xl mb-10 font-bold text-gray-900 w-1/2 break-words text-center md:text-2xl">
          {character.name}
        </Text>
        <View className="flex flex-row justify-between items-center mb-4">
          <View className="flex flex-col px-2">
            <View className="flex flex-row items-center mb-4">
              <Text className="text-sm font-medium text-gray-700">Status:</Text>
              <Text className="text-sm font-medium text-gray-900 ml-2">
                {character.status}
              </Text>
            </View>
            <View className="flex flex-row items-center mb-4">
              <Text className="text-sm font-medium text-gray-700">
                Species:
              </Text>
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
          </View>
          <View className="flex fllex-col border-l-2 border-gray-200 px-2">
            <View className="flex flex-row items-center mb-4">
              <Text className="text-sm font-medium text-gray-700">Origin:</Text>
              <Text className="text-sm font-medium text-gray-900 ml-2">
                {character.origin.name}
              </Text>
            </View>
            <View className="flex flex-row items-center mb-4">
              <Text className="text-sm font-medium text-gray-700">
                Location:
              </Text>
              <Text className="text-sm font-medium text-gray-900 ml-2">
                {character.location.name}
              </Text>
            </View>
            <View className="flex flex-row items-center mb-4">
              <Text className="text-sm font-medium text-gray-700">
                Created:
              </Text>
              <Text className="text-sm font-medium text-gray-900 ml-2">
                {new Date(character.created).toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>
        <View className="flex flex-row justify-center items-center mt-4">
          <Button label="Back" onPress={() => navigation.goBack()} />
        </View>
        {/* Additional character details here */}
      </View>
    </View>
  );
};

export default CharacterDetailScreen;
