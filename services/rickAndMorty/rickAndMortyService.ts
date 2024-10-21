import ApiService from '../apiService';

const apiService = new ApiService('https://rickandmortyapi.com/api');

// Fonction pour récupérer tous les personnages
export const getAllCharacters = async (page: number = 1): Promise<any[]> => {
  return apiService.get<any[]>(`/character`);
};
