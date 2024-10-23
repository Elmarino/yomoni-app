import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const GoBackButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="absolute top-14 left-4 flex-row items-center"
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back" size={30} color="black" />
      <Text className="ml-2 text-lg font-semibold text-black">Back</Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;
