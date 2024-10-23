import { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ListRenderItemInfo,
  Platform,
  RefreshControl,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import CharacterCard from '@/components/CharactersSearch/CharacterCard';
import FilterModal from '@/components/ui/FilterModal';
import SearchComponent from '@/components/ui/SearchComponent';
import {
  getAllCharacters,
  getCharactersByName
} from '@/services/rickAndMorty/rickAndMortyService';
import { Character } from '@/types/RickAndMortyTypes/Character';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { isWebAndLargeScreen } from '@/globals/constants';

interface CardData {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const [filterModalOpened, setfilterModalOpened] = useState(false);
  const [searchResults, setSearchResults] = useState<Character[]>([]);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    getFirstList();
  }, []);

  const getFirstList = async () => {
    const characters = await getAllCharacters();
    setSearchResults(characters.results);
  };

  const handleQueryChange = (text: string) => {
    console.log('text', text);
    setQuery(text);
  };

  const submitSearch = async (query: string) => {
    try {
      if (query == '') {
        Alert.alert('Research field empty');
        return;
      }
      const characters = await getCharactersByName(query);
      setSearchResults(characters.results);
    } catch (error) {
      //Showing empty list if error
      setSearchResults([]);
    }
  };
  const toggleModal = (type: 'filter') => {
    if (type === 'filter') {
      setfilterModalOpened((prevFilterModalOpened) => !prevFilterModalOpened);
    }
  };

  const renderItem = ({ item }: ListRenderItemInfo<CardData>) => (
    <CharacterCard
      title={item.name}
      imageBackgroud={item.image}
      status={item.status}
      onPressFunction={() =>
        navigation.navigate('Details', { character: item })
      }
    />
  );

  const renderEmptyComponent = () => (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg text-gray-500 mt-2">No characters found.</Text>
    </View>
  );

  return (
    <>
      <FilterModal
        handleDisplay={() => toggleModal('filter')}
        visible={filterModalOpened}
      />
      <FlatList
        ListHeaderComponent={
          <View className="pb-2 w-full">
            <Image
              resizeMode={'contain'}
              className="self-center h-14 md:h-32"
              source={require('@/assets/images/rick-and-morty.png')}
            />
            <Text className="text-sm text-center font-bold text-white mb-3 md:text-xl">
              Dead or alive ?
            </Text>
            {isWebAndLargeScreen && (
              <SearchComponent
                query={query}
                setQuery={handleQueryChange}
                onSearch={submitSearch}
              />
            )}
          </View>
        }
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={Dimensions.get('window').width > 998 ? 4 : 2}
        initialNumToRender={12}
        className="bg-zinc-900 w-full p-4 flex-1 pt-10"
        contentContainerStyle={{ marginHorizontal: 10, paddingBottom: 200 }}
        ListEmptyComponent={renderEmptyComponent}
        refreshControl={
          <RefreshControl onRefresh={getFirstList} refreshing={true} />
        }
      />
      {!isWebAndLargeScreen && (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              className="p-5 justify-center items-center absolute bottom-1 w-full"
            >
              <View className=" w-full">
                <SearchComponent
                  query={query}
                  setQuery={setQuery}
                  onSearch={submitSearch}
                  openCloseModal={() => toggleModal('filter')}
                />
              </View>
            </KeyboardAvoidingView>
          </>
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

export default HomeScreen;
