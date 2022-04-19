export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: any;
  };
  tld: string[];
  borders: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: any;
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: any;
  latlng: [number, number];
  landlocked: boolean;
  area: number;
  flag: string;
  maps: {
    googleMaps?: string;
    openStreetMaps?: string;
  };
  population: number;
  gini: any;
  fifa: string;
  car: any;
  timezones: string[];
  continents: string[];
  coatOfArms: any;
  startOfWeek: string;
  capitalInfo: any;
  postalCode: any;
  flags: Record<string, 'svg' | 'png'>;
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
    fra: {
      f: string;
      m: string;
    };
  };
}
