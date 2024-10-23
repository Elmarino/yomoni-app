export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string; // Can be an empty string
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string; // URL to the character's image
  episode: string[]; // Array of episode URLs
  url: string; // URL to the character's own endpoint
  created: string; // Timestamp of when the character was created
}
