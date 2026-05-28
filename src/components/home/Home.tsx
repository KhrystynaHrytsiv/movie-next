'use client'

import {IMovie} from "@/src/interfaces";
import {originImg, poster} from "@/src/constants/url";
import {useState} from "react";
import {useRouter} from "next/navigation";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = ({movies}:{movies:IMovie[]}) => {
    const [activeMovie, setActiveMovie] = useState(movies[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState<null | number>(null);
    const router = useRouter();
    const visibleMovies = 8;

    const nextSlide = () => {
        if(currentIndex < movies.length - visibleMovies){
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            setActiveMovie(movies[newIndex]);
        }
    };

    const prevSlide = () => {
        if(currentIndex > 0){
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            setActiveMovie(movies[newIndex]);
        }
    };

    return (
        <div className='relative h-screen overflow-hidden'>
            <div className='absolute inset-0'>
                <img src={`${originImg}${activeMovie.backdrop_path}`} className='w-full h-full object-cover transition-all duration-700'/>
                <div className='absolute top-100 left-8 z-20 w-1/2 bg-black/50 rounded-lg p-6 '>
                    <h1 className='text-4xl font-bold mb-6'>{activeMovie.title}</h1>
                    <p className='text-2xl leading-relaxed'>{activeMovie.overview}</p>
                </div>
            </div>
            <div className='relative z-10 flex bottom-60 items-center h-full'>
                <button onClick={prevSlide} className='absolute left-4 z-20 w-14 h-14 rounded-full bg-black/50 text-white flex items-center justify-center'>
                    <ArrowBackIosNewIcon/>
                </button>

                <div className='w-full overflow-hidden px-24'>
                    <div className='flex gap-6 transition-transform duration-500' style={{transform: `translateX(-${currentIndex * 200}px)`}}>
                        {movies.map(movie => (
                            <div key={movie.id} onClick={()=>setIsOpen(movie.id)} onMouseEnter={() => setActiveMovie(movie)}
                                 className='relative min-w-[180px] h-[270px] rounded-2xl overflow-hidden'>
                                <img src={`${poster}${movie.poster_path}`} alt={movie.title} className='w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105'/>
                            {isOpen === movie.id &&
                                <div className='absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-300'>
                                <button onClick={() =>router.push(`/movies/${movie.id}`)} className='bg-white text-black text-xl font-semibold px-8 py-4 rounded-full hover:scale-105 transition-transform' > Details</button>
                                </div>}
                            </div>

                        ))}
                    </div>
                </div>

                <button onClick={nextSlide} className='absolute right-4 z-20 w-14 h-14 rounded-full bg-black/50 text-white flex items-center justify-center'>
              <ArrowForwardIosIcon/>
                </button>
            </div>
        </div>
    );
};

export default Home;