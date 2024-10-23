export interface Location {
  id: number;
  name: string;
  type: string; // e.g., "Planet", "Space station", etc.
  dimension: string; // e.g., "Dimension C-137"
  residents: string[]; // Array of character URLs
  url: string; // URL to the location's own endpoint
  created: string; // Timestamp of when the location was created
}
