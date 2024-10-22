import ApiService from '../apiService';

const apiService = new ApiService('https://rickandmortyapi.com/api');

// Fonction pour récupérer tous les personnages
export const getAllCharacters = async (page: number = 1): Promise<any[]> => {
  return apiService.get<any[]>(`/character`);
};

// Fonction pour récupérer un personnage par ID
export const getCharacterById = async (id: number): Promise<any> => {
  return apiService.get<any>(`/character/${id}`);
};

// Fonction pour récupérer des personnages par un filtre
export const getCharactersByName = async (name: string): Promise<any[]> => {
  return apiService.get<any[]>(`/character/?name=${name}`);
};

// Fonction pour récupérer les emplacements des personnages
export const getCharacterLocations = async (): Promise<any[]> => {
  return apiService.get<any[]>(`/location`);
};

// Fonction pour récupérer les épisodes des personnages
export const getCharacterEpisodes = async (): Promise<any[]> => {
  return apiService.get<any[]>(`/episode`);
};
