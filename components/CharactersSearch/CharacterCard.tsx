import { Image, Text, View, TouchableOpacity } from 'react-native';
import Badge from '../ui/Badge';

/**
 * CharacterCard component displays a brief overview of a character,
 * including their name, image, and status. It is designed to be
 * interactive, allowing users to press the card to view more details
 * about the character.
 */

interface CardProps {
  title: string;
  imageBackgroud: string;
  status: 'Alive' | 'Dead' | 'unknown';
  onPressFunction: () => void;
}

const colorMap: Record<string, string> = {
  dead: 'bg-rose-700',
  alive: 'bg-emerald-500',
  unknown: 'bg-neutral-600'
};

const CharacterCard: React.FC<CardProps> = ({
  title,
  imageBackgroud,
  status,
  onPressFunction
}) => {
  const backgroundColor = colorMap[status.toLocaleLowerCase()] || 'bg-gray-500';

  return (
    <TouchableOpacity
      className={'rounded-lg flex-1 m-1 h-52 overflow-hidden'}
      activeOpacity={0.5}
      onPress={onPressFunction}
    >
      <Badge
        additionalClassNames={`${backgroundColor} absolute top-1 right-1`}
        status={status}
      />
      <Image
        source={{ uri: imageBackgroud }}
        className="absolute top-0 left-0 w-full h-full z-[-1] bg-cover"
      />
      <View className="absolute bottom-0 w-full">
        <Text className="text-md py-2 font-semibold text-center text-white bg-slate-950/50">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterCard;
