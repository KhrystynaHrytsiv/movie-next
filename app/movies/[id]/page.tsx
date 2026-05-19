import MovieDetails from "@/src/components/movies/MovieDetails";
import {FC} from "react";
import {generalService} from "@/src/services/generalService";
import IMDetails from "@/src/interfaces/IMDetails";

interface IProp {
    params:Promise<{id:string}>
}
const MovieDetailsPage:FC<IProp> = async ({params}) => {
    const {id} = await params;
    const movie = await generalService.getById<IMDetails>(`movie`, id);
    return (
        <div className='w-80% m-auto'>
          <MovieDetails movie={movie}/>
        </div>
    );
};

export default MovieDetailsPage;