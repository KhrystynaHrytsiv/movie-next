import {generalService} from "@/src/services/generalService";
import Movie from "@/src/components/movies/Movie";
import {IResponse} from "@/src/interfaces/IResponse";

const Movies = async () => {
    const {results:movies} = await generalService.get<IResponse>('/discover/movie');

    return (
        <div className=' grid grid-cols-5 w-4/5 m-auto my-6 gap-4'>
            {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default Movies;