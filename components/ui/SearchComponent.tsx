import React from 'react';
import { View, TextInput, Text, KeyboardAvoidingView } from 'react-native';
import GenericButton from './Button';

interface SearchComponentProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: (searchQuery: string) => void;
  openCloseModal?: () => void;
  label?: string;
  placeholder?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  query,
  setQuery,
  onSearch,
  openCloseModal,
  label,
  placeholder = 'Rechercher...'
}) => {
  const submitSearch = () => {
    onSearch(query);
  };

  return (
    <>
      {label && <Text className="mr-2 text-lg font-semibold">{label}</Text>}
      <View className="flex flex-row items-center mb-4">
        {openCloseModal && (
          <GenericButton onPress={openCloseModal} icon="filter" />
        )}
        <TextInput
          className={`flex-1 border border-gray-100 bg-white text-black rounded-md p-2 h-10 leading-4 ${openCloseModal ? 'mx-2' : 'mr-2'} `}
          value={query}
          onChangeText={setQuery}
          placeholder={placeholder}
        />
        <GenericButton onPress={submitSearch} icon="search" />
      </View>
    </>
  );
};

export default SearchComponent;
