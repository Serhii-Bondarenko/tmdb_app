import {IResponse} from "./response.interface";
import {IMovie} from "./movie.interface";
import {IGenre} from "./genre.interface";

export interface IMovieState {
    response: null | IResponse;
    movies: IMovie[];
    genres: IGenre[];
    status: null | string;
    error: unknown | null;
}