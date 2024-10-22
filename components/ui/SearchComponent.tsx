import React from 'react';
import { View, TextInput, Text, KeyboardAvoidingView } from 'react-native';
import GenericButton from './Button';

interface SearchComponentProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: (searchQuery: string) => void;
  label?: string;
  placeholder?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  query,
  setQuery,
  onSearch,
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
        <TextInput
          className="flex-1 border border-gray-300 bg-white text-black rounded p-2 mr-2 h-10 leading-4"
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
