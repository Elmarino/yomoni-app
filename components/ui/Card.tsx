import { Text, View } from 'react-native';

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => (
  <View className={'bg-red-500 rounded-lg flex-1 m-1 h-52'}>
    <Text className="text-lg font-semibold text-center">{title}</Text>
  </View>
);

export default Card;
