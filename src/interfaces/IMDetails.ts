export interface IMDetails {
   adult: boolean;
   backdrop_path: string;
   budget: number;
   genres: Genres[];
   homepage: string;
   id: number;
   origin_country: string[];
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   production_companies: ProductionCompanies[];
   production_countries: ProductionCountries[];
   release_date: string;
   runtime: number;
   status: string;
   tagline: string;
   title: string;
   video: boolean;
   vote_average: number;
   vote_count: number;
}


export interface Genres {
   id: number;
   name: string;
}

export interface ProductionCompanies {
   id: number;
   logo_path: string;
   name: string;
   origin_country: string;
}

export interface ProductionCountries {
   name: string;
}

