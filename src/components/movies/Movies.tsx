import {generalService} from "@/src/services/generalService";
import Movie from "@/src/components/movies/Movie";
import {IResponse} from "@/src/interfaces";
import {FC} from "react";

interface IProp{
    searchParams: {page?:string}
}
const Movies:FC<IProp> = async ({searchParams})=> {
    const currentPage = Number(searchParams?.page ?? 1);
    const {results:movies} = await generalService.get<IResponse>(`/discover/movie?page=${currentPage}`);

    return (
        <div className=' grid grid-cols-5 w-4/5 m-auto my-6 gap-4'>
            {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            <div className="flex gap-4 mt-4">
                {currentPage > 1 && (<a href={`?page=${currentPage - 1}`}>Previous</a>)}
                <a href={`?page=${currentPage + 1}`}>Next</a>
            </div>
        </div>
    );
};

export default Movies;