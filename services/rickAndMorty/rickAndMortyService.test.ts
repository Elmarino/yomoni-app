import ApiService from '../apiService';
import { getCharacterById } from './rickAndMortyService';

// Mock the global fetch function
global.fetch = jest.fn();

describe('Rick and Morty Service', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it('should fetch character by ID', async () => {
    const characterId = 2;
    const mockCharacter = {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: { name: 'unknown', url: '' },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3'
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1'
        // ... other episodes
      ],
      url: 'https://rickandmortyapi.com/api/character/2',
      created: '2017-11-04T18:50:21.651Z'
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockCharacter
    });

    const character = await getCharacterById(characterId);

    expect(character).toEqual(mockCharacter);
    expect(fetch).toHaveBeenCalledWith(
      `https://rickandmortyapi.com/api/character/${characterId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        // Add the signal property to match the actual call
        signal: expect.any(AbortSignal)
      }
    );
  });

  it('should handle errors', async () => {
    const characterId = 2;

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({ message: 'Not Found' })
    });

    await expect(getCharacterById(characterId)).rejects.toThrow(
      'HTTP error! status: 404'
    );
  });
});
