import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface GenericButtonProps {
  onPress: () => void;
  label?: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

const Button: React.FC<GenericButtonProps> = ({ onPress, label, icon }) => {
  return (
    <TouchableOpacity
      className="bg-blue-500 p-2 rounded-md items-center"
      onPress={onPress}
    >
      {icon && <Ionicons name={icon} size={24} color="white" />}
      {label && <Text className="text-white text-center">{label}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
