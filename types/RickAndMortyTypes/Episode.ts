export interface Episode {
  id: number;
  name: string;
  air_date: string; // e.g., "December 2, 2013"
  episode: string; // e.g., "S01E01"
  characters: string[]; // Array of character URLs
  url: string; // URL to the episode's own endpoint
  created: string; // Timestamp of when the episode was created
}
