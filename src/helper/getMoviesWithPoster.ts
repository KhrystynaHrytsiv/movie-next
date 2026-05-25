import { generalService } from "@/src/services/generalService";
import { IResponse } from "@/src/interfaces";

export async function getMoviesWithPosters(endpoint: string, currentPage: number){
    const seen = new Set<number>();
    let apiPage = 1;
    let totalApiPages = 1;
    const allMovies = [];
    while(apiPage <= totalApiPages){
        const url = endpoint.includes("?") ? `${endpoint}&page=${apiPage}` : `${endpoint}?page=${apiPage}`;
        const data = await generalService.get<IResponse>(url);
        totalApiPages = data.total_pages ?? 1;
        const filtered = (data.results ?? []).filter(movie => movie.poster_path && !seen.has(movie.id));
        filtered.forEach(movie => seen.add(movie.id));
        allMovies.push(...filtered);
        apiPage++;
    }
    const totalPages = Math.ceil(allMovies.length / 20);
    const start = (currentPage - 1) * 20;
    const movies = allMovies.slice(start, start + 20);

    return {movies, totalPages, hasNextPage: currentPage < totalPages};
}