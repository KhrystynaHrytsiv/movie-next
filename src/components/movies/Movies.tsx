import Movie from "@/src/components/movies/Movie";
import Pagination from "../pagination/Pagination";
import {getMoviesWithPosters} from "@/src/helper/getMoviesWithPoster";
import {generalService} from "@/src/service/generalService";
import {IMovie, IResponse} from "@/src/interfaces";
import {buildParams} from "@/src/helper/buildEndpoint";

interface IProp{
        page:number,
        query:string,
        genre:string,
        year:string,
        rating:string,
}
const Movies = async ({page, query, genre, rating, year}:IProp)=> {
    const params = buildParams({query, genre, year, rating}, {genre: 'with_genres', year: 'primary_release_year', rating: 'vote_average.gte'});
    let endpoint = query ? 'search/movie' : 'discover/movie';
    endpoint += `?${params.toString()}`;

    let movies: IMovie[];
    let totalPages:number;

    if(query){
        const result = await getMoviesWithPosters(endpoint, page);
        movies = result.movies;
        totalPages = result.totalPages;
    }else {
        const data = await generalService.get<IResponse>(`${endpoint}&page=${page}`);
        movies = data.results
        totalPages= data.total_pages
    }

    return (
        <div className='grid grid-cols-5 w-4/5 m-auto my-6 gap-4'>
            {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            <div className='col-span-5'>
                <Pagination currentPage={page} query={query} totalPages={totalPages} genre={genre} year={year} rating={rating}  />
            </div>
        </div>
    );
};

export default Movies;