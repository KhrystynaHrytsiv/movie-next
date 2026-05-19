import IMDetails from "@/src/interfaces/IMDetails";
import {poster} from "@/src/components/constants/url";
import {generalService} from "@/src/services/generalService";
import {IResCast} from "@/src/interfaces/IActor";


const MovieDetails = async ({movie}:{movie:IMDetails}) => {
    const {id, title, poster_path, genres, overview, release_date, runtime, origin_country, production_companies, vote_average} = movie;
    const {cast:actors} = await generalService.getAll<IResCast>(`/movie/${id}/credits`);
    return (
        <div>
            <div>video</div>
        <div className='flex'>
            <div>
                <img src={`${poster}/${poster_path}`} alt={title} className='h-3/4 w-3/4 rounded-xl'/>
                <div className='flex flex-col gap-4 text-lg'>
                    <p>Release date <br/>{release_date}</p>
                    <p>Duration <br/> {runtime} min</p>
                    <p>Country <br/> {origin_country}</p>
                    <p>Companies <br/> {production_companies.map(company => <span
                        key={company.id}>{company.name} </span>)}</p>
                    <p> Rating <br/> {vote_average}</p>
                </div>
            </div>
            <div>
                <h2>{title}</h2>
                <div> {genres.map(genre =><span key={genre.id}>{genre.name} </span>)}</div>
                <p>{overview}</p>
                <div className='grid grid-cols-2 '>{actors && actors.slice(0, 10).map(actor =>
                    <div key={actor.id} className='flex gap-6'>
                        <img src={`${poster}/${actor.profile_path}`} alt={actor.name}
                             className='h-30 w-30 rounded-full object-cover'/>
                        <p>{actor.name}</p>
                    </div>)}
                </div>
            </div>
        </div>
        </div>
    );
};

export default MovieDetails;