import {Character, Film} from '.';

export type Species = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: Array<string>;
  films: Array<string>;
  created: Date;
  edited: Date;
  url: string;
};
