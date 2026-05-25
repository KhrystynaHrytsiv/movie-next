import Movie from "@/src/components/movies/Movie";
import Pagination from "../pagination/Pagination";
import {getMoviesWithPosters} from "@/src/helper/getMoviesWithPoster";

interface IProp{
    page:number,
    query:string
}
const Movies = async ({page, query}:IProp)=> {
    const endpoint = query ? `search/movie?query=${query}` : `discover/movie`
    const {movies,  totalPages, hasNextPage} = await getMoviesWithPosters(endpoint, page);

    return (
        <div className='grid grid-cols-5 w-4/5 m-auto my-6 gap-4'>
            {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
           <div className='col-span-5'>
               <Pagination currentPage={page} query={query} totalPages={totalPages} hasNextPage={hasNextPage}/>
           </div>
        </div>
    );
};

export default Movies;