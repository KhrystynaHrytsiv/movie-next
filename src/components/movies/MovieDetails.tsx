import {photo, poster, video_path} from "@/src/constants/url";
import {generalService} from "@/src/service/generalService";
import Link from "next/link";
import Movie from "@/src/components/movies/Movie";
import {IMDetails, IResCast, IResponse, IResVideo} from "@/src/interfaces";

const MovieDetails = async ({movie}:{movie:IMDetails}) => {
    const {id, title, poster_path, genres, overview, release_date, runtime, production_countries, production_companies, vote_average, tagline} = movie;
    const {cast:actors} = await generalService.get<IResCast>(`/movie/${id}/credits`);
    const {results:video} = await generalService.get<IResVideo>(`/movie/${id}/videos`);
    const trailer =  video.find(v => v.site === 'YouTube' && v.type === 'Trailer');
    const {results:recommendations} = await generalService.get<IResponse>(`movie/${id}/recommendations`);

    return (
        <div className='w-full leading-relaxed'>
            {trailer && (
            <div className="relative h-[450px] w-full overflow-hidden rounded-4xl mt-10">
                <iframe
                    className="absolute inset-0 h-full w-full scale-150"
                    src={`${video_path}/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&start=3`}
                    title={trailer.name} allow="autoplay; encrypted-media" allowFullScreen/>
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-white gap-15">
                    <h1 className="text-7xl font-bold uppercase text-center">{movie.title}</h1>
                    <button className="rounded-full bg-white/20 px-10 py-4 text-xl backdrop-blur-md"><Link href={`/movies/${id}/trailer`}>Watch trailer</Link></button>
                </div>
            </div>)}
            <div className='flex justify-between w-full mt-20'>
                <div className='w-[400px]'>
                    <img src={`${poster}/${poster_path}`} alt={title} className='object-cover w-full rounded-3xl'/>
                    <div className='flex flex-col gap-6 text-lg px-6 w-full mt-6'>
                        <div>
                            <p className='text-gray-700 dark:text-neutral-400'>Release date</p>
                            <p className='mt-1 text-gray-900 dark:text-neutral-100'>{release_date}</p>
                        </div>
                        <div>
                            <p className=' text-gray-700 dark:text-neutral-400'>Duration</p>
                            <p className='mt-1 text-gray-900 dark:text-neutral-100'>{runtime} min</p>
                        </div>
                        <div>
                            <p className='text-gray-700 dark:text-neutral-400'>Country </p>
                            {production_countries.slice(0, 1).map(country => <p key={country.name} className='mt-1 text-gray-900 dark:text-neutral-100'>{country.name}</p>)}
                        </div>
                        <div>
                        <p className='text-gray-700 dark:text-neutral-400'>Companies</p>
                        <div className='mt-1 text-gray-900 dark:text-neutral-100'>{production_companies.map((company, index) => <span
                            key={company.id}>{company.name}  {index !== production_companies.length - 1 && ', '} </span>)}
                        </div>
                        </div>
                        <div>
                            <p className='text-gray-700 dark:text-neutral-400'>Rating</p>
                            <p className='mt-1 text-gray-900 dark:text-neutral-100'>IMDb {vote_average.toFixed(1)}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-8 w-2/3 mb-20'>
                    <h2>{tagline || title}</h2>
                    <hr/>
                    <div className='flex gap-4'>{genres.map((genre, index) => <span
                        key={genre.id}> {genre.name}{index !== genres.length - 1 && ','}</span>)}</div>
                    <hr/>
                    <h2 className='text-3xl font-semibold'>Preview</h2>
                    <p>{overview}</p>
                    <h2 className='text-3xl font-semibold mb-6'>Actors:</h2>
                    <div className='grid grid-cols-2 gap-4 '>
                        {actors && actors.slice(0, 10).map(actor =>
                        <div key={actor.id} className='flex gap-6'>
                            <img src={actor.profile_path ?`${poster}/${actor.profile_path}`: photo} alt={actor.name} className='h-30 w-30 rounded-full object-cover'/>
                            <p className='my-auto'>{actor.name}</p>
                        </div>)}
                    </div>
                </div>
            </div>
            <hr/>
            <h3 className='text-3xl font-semibold m-10 text-center'>Recommendations</h3>
            <div className='flex justify-between my-10'>
                {recommendations && (recommendations.slice(0, 5).map(movie => <div key={movie.id}>
                    <Movie movie={movie}/></div>))}
            </div>
        </div>
    );
}

export default MovieDetails;