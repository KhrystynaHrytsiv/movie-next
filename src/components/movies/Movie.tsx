import {IMovie} from "@/src/interfaces";
import {poster} from "@/src/constants/url";
import Link from "next/link";

const Movie = ({movie}:{movie:IMovie}) => {
    const {id, title, poster_path} = movie;
    return (
        <Link href={`/movies/${id}`} className='rounded flex flex-col align-middle bg-gray-400 gap-4 w-[250px]'>
            <img src={`${poster}/${poster_path}`} alt={title} className='h-3/4 rounded '/>
            <h3 className='text-lg font-semibold text-center truncate'>{title}</h3>
        </Link>
    );
};

export default Movie;