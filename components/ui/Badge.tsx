import React from 'react';
import { View, Text } from 'react-native';

interface BadgeProps {
  status: 'Alive' | 'Dead' | 'unknown';
  additionalClassNames?: string;
}

const Badge: React.FC<BadgeProps> = ({ status, additionalClassNames }) => {
  return (
    <View className={`rounded-full px-2 py-1 ${additionalClassNames}`}>
      <Text className="text-white font-medium text-xs text-center w-auto">
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Text>
    </View>
  );
};

export default Badge;
