export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: Volume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export interface Volume {
  value: number;
  unit: string;
}

export interface Method {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist?: string;
}

export interface MashTemp {
  temp: Temperature;
  duration?: number;
}

export interface Fermentation {
  temp: Temperature;
}

export interface Temperature {
  value: number;
  unit: string;
}

export interface Ingredients {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
}

export interface Malt {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

export interface Hop {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
  add: string;
  attribute: string;
}
