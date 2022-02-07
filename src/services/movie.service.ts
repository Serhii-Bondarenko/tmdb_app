import {axiosService} from "./axios.service";
import {urls} from "../configs";
import {IResponse, IMovie} from "../interfaces";

export const movieService = {
    getAll: () => axiosService.get<IResponse>(urls.movies),
    getById: (id:number) => axiosService.get<IMovie>(`/movie/${id}`)
}