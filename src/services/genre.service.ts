import {axiosService} from "./axios.service";
import {IGenre} from "../interfaces";
import {urls} from "../configs";

export const genreService = () => axiosService.get<IGenre[]>(urls.genres);