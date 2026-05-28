import {IMovie} from "@/src/interfaces";
import {poster} from "@/src/constants/url";
import Link from "next/link";

const Movie = ({movie}:{movie:IMovie}) => {
    const {id, title, poster_path} = movie;
    return (
        <div className='rounded-2xl flex flex-col align-middle bg-gray-700/50 w-[250px] h-[350px]'>
        <Link href={`/movies/${id}`} >
            <img src={`${poster}/${poster_path}`} alt={title} className='h-[300px] rounded-b-sm rounded-t-2xl w-full'/>
            <h3 className='text-lg font-semibold text-center truncate m-3'>{title}</h3>
        </Link>

        </div>
    );
};

export default Movie;