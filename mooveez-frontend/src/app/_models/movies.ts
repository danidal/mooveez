export class Movie {
    id: number;
    title: string;
    plot: string;
    poster: string;
    genres: [string];
    fullplot: string;
    countries: [string];
    languages: [string];
    cast: [string];
    directors: [string];
    writers: [string];
    numMflixComments: number;
    year: number;
    awards: Map<string, string>;
    imdb: Map<string, string>;
}
