    import Movie from "@/src/components/movies/Movie";
    import Pagination from "../pagination/Pagination";
    import {getMoviesWithPosters} from "@/src/helper/getMoviesWithPoster";
    import {generalService} from "@/src/services/generalService";
    import {IResponse} from "@/src/interfaces";

    interface IProp{
        page:number,
        query:string,
        genre:string | undefined,
        year:string | undefined,
        rating:string | undefined
    }
    const Movies = async ({page, query, genre, rating, year}:IProp)=> {

        const params = new URLSearchParams();

        if (query) params.set('query', query);
        if (genre) params.set('with_genres', genre);
        if (year) params.set('primary_release_year', year);
        if (rating) params.set('vote_average.gte', rating);
        params.set("page", page.toString());

        let endpoint = query ? 'search/movie' : 'discover/movie';
        endpoint += `?${params.toString()}`;

        let movies = [];
        let totalPages = 1;
        if(query){
            const result = await getMoviesWithPosters(endpoint, page);
            movies = result.movies;
            totalPages = result.totalPages;
        } else {
            const data = await generalService.get<IResponse>(endpoint);
            movies = data.results
            totalPages= data.total_pages
        }


        return (
            <div className='grid grid-cols-5 w-4/5 m-auto my-6 gap-4'>
                {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
               <div className='col-span-5'>
                   <Pagination currentPage={page} query={query} totalPages={totalPages} genre={genre} year={year} rating={rating}  />
               </div>
            </div>
        );
    };

    export default Movies;