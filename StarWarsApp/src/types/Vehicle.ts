import {Character, Film} from '.';

export type Vehicle = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: Array<string>;
  films: Array<string>;
  created: Date;
  edited: Date;
  url: string;
};
