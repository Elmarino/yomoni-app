import React from 'react';
import { Modal, View, Text, Image, Button } from 'react-native';
import { Character } from '@/types/RickAndMortyTypes/Character'; // Adjust the import path as necessary

/**
 * CharacterDetailModal component displays detailed information about a character
 * in a modal format. It shows the character's name, status, species, gender,
 * origin, location, and creation date.
 */

interface CharacterDetailModalProps {
  visible: boolean;
  character: Character | null;
  handleDisplay: () => void;
}

const colorMap: Record<string, string> = {
  dead: 'bg-rose-700/80',
  alive: 'bg-emerald-500/80',
  unknown: 'bg-neutral-600/80'
};

const CharacterDetailModal: React.FC<CharacterDetailModalProps> = ({
  visible,
  character,
  handleDisplay
}) => {
  const backgroundColor = character
    ? colorMap[character.status.toLowerCase()] || 'bg-gray-500'
    : 'bg-gray-500';

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={handleDisplay}
      transparent={true}
    >
      {character && (
        <View
          className={`flex-1 justify-center items-center p-4 ${backgroundColor}`}
        >
          <View className="flex flex-col items-center pt-10 pb-5 px-10 bg-white rounded-lg">
            <Image
              source={{ uri: character.image }}
              className="w-32 h-32 rounded-lg mb-4"
            />
            <Text className="text-xl font-bold mb-2 text-gray-900">
              {character.name}
            </Text>
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
            <Button title="Close" onPress={handleDisplay} />
          </View>
        </View>
      )}
    </Modal>
  );
};

export default CharacterDetailModal;
