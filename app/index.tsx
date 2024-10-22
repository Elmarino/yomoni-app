import Card from '@/components/ui/Card';
import SearchComponent from '@/components/ui/SearchComponent';
import {
  getAllCharacters,
  getCharactersByName
} from '@/services/rickAndMorty/rickAndMortyService';
import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ListRenderItemInfo,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

const Index = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log('fire !');
  }, []);

  const getAllCharacters = async () => {
    const characters: any = await getAllCharacters();
    return characters;
  };

  const submitSearch = async (query: string) => {
    try {
      console.log(query);
      const characters = await getCharactersByName(query);
      console.log(characters.results.length);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const DATA = [
    { id: '1', title: 'Card 1' },
    { id: '2', title: 'Card 2' },
    { id: '3', title: 'Card 3' },
    { id: '4', title: 'Card 4' },
    { id: '5', title: 'Card 5' },
    { id: '6', title: 'Card 6' },
    { id: '7', title: 'Card 7' },
    { id: '8', title: 'Card 8' },
    { id: '9', title: 'Card 9' },
    { id: '10', title: 'Card 10' },
    { id: '11', title: 'Card 11' },
    { id: '12', title: 'Card 12' }
    // Add more cards as needed
  ];
  interface CardData {
    id: string;
    title: string;
  }

  const renderItem = ({ item }: ListRenderItemInfo<CardData>) => (
    <Card title={item.title} />
  );

  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        className="border border-gray-700 w-full p-4 flex-1"
        contentContainerStyle={{ margin: 4 }}
        horizontal={false}
        numColumns={2}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={54}
            className=" p-5 justify-center items-center absolute bottom-14 w-full"
          >
            <View className=" w-full">
              <SearchComponent
                query={query}
                setQuery={setQuery}
                onSearch={submitSearch}
              />
            </View>
          </KeyboardAvoidingView>
        </>
      </TouchableWithoutFeedback>
      <Image
        resizeMode={'contain'}
        className="absolute bottom-2 w-11/12 self-center h-14"
        source={require('./../assets/images/rick-and-morty.png')}
      />
    </>
  );
};

export default Index;
