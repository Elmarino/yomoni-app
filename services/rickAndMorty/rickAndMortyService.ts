import ApiService from '../apiService';
import { Character } from '@/types/RickAndMortyTypes/Character'; // Adjust the import path as necessary
import { Location } from '@/types/RickAndMortyTypes/Location'; // Adjust the import path as necessary
import { Episode } from '@/types/RickAndMortyTypes/Episode'; // Adjust the import path as necessary

const apiService = new ApiService('https://rickandmortyapi.com/api');

// Function to retrieve all characters
export const getAllCharacters = async (
  page: number = 1
): Promise<{ info: any; results: Character[] }> => {
  return apiService.get<{ info: any; results: Character[] }>(
    `/character?page=${page}`
  );
};

// Function to retrieve a character by ID
export const getCharacterById = async (id: number): Promise<Character> => {
  return apiService.get<Character>(`/character/${id}`);
};

// Function to retrieve characters by name filter
export const getCharactersByName = async (
  name: string
): Promise<{ info: any; results: Character[] }> => {
  return apiService.get<{ info: any; results: Character[] }>(
    `/character/?name=${name}`
  );
};

// Function to retrieve all locations
export const getCharacterLocations = async (): Promise<{
  info: any;
  results: Location[];
}> => {
  return apiService.get<{ info: any; results: Location[] }>(`/location`);
};

// Function to retrieve all episodes
export const getCharacterEpisodes = async (): Promise<{
  info: any;
  results: Episode[];
}> => {
  return apiService.get<{ info: any; results: Episode[] }>(`/episode`);
};