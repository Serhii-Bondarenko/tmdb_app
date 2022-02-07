import {IMovie} from "./movie.interface";

export interface IResponse{
    page: number;
    results: IMovie[];
    total_pages: number;
}