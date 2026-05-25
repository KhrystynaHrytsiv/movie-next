import Link from "next/link";
import {generalService} from "@/src/services/generalService";
import {IGenre} from "@/src/interfaces";

interface IProps {
    currentGenre?: string;
    currentYear?: string;
    currentRating?: string;
}

const Filters = async ({currentGenre, currentYear, currentRating}:IProps) => {
    const {genres} = await generalService.get<{genres:IGenre[]}>('genre/movie/list');
    const years = Array.from({length: 50 }, (_,i)=> new Date().getFullYear() - i);
    

    return (
        <form method="GET" action="/movies" className='flex gap-10 p-4 rounded-xl bg-gray-700/30'>
            <select name='genre' defaultValue={currentGenre || ''} className='px-4 py-2 rounded-full bg-gray-700'>
                <option value=''>All Genres</option>
                {genres && genres.map(genre=>(<option key={genre.id} value={genre.id}>{genre.name}</option>))}
            </select>

            <select name='year' defaultValue={currentYear || ''}>
                <option value=''>All years</option>
                {years.map(year=>(<option key={year} value={year}>{year}</option>))}
            </select>

            <select name='rating' defaultValue={currentRating || ''}>
                <option value=''>All ratings</option>
                {Array.from({length:10}, (_,i)=>10-i)
                    .map(rating=>(<option key={rating} value={rating}>{rating}+</option>))}
            </select>
            <button type='submit' className='px-8 rounded-full border '>Apply</button>
            <Link href='/movies' className='px-8 border rounded-full'>Reset</Link>

        </form>

    );

};

export default Filters;