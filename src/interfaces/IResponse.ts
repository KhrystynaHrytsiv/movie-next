import {IMovie} from "@/src/interfaces/IMovie";

export interface IResponse{
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}