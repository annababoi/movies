import {axiosService} from "./axios.service";
import {urls} from "../configs";

const genreService = {
    getAll:()=>axiosService(urls.genres),
    getById:(id)=>axiosService(`${urls.genres}/${id}`)
}

export {
  genreService
}