import {generalService} from "@/src/services/generalService";
import {IResponse} from "@/src/interfaces";

export async function getMoviesWithPosters(endpoint: string, startPage: number) {
    let page = startPage;
    let totalPages = 1;
    const collected = [];
    // const seen = new Set<number>();
    while (collected.length < 20 && page <= totalPages) {
        const url = endpoint.includes("?") ? `${endpoint}&page=${page}` : `${endpoint}?page=${page}`;
        const data = await generalService.get<IResponse>(url);
        const results = data?.results ?? [];
        totalPages = data?.total_pages ?? 1;
        const filtered = results
            .filter((m) => m.poster_path)
        //     .filter((m) => !seen.has(m.id));
        // filtered.forEach((m) => seen.add(m.id));
        collected.push(...filtered);
        page++;
    }
    return {
        movies: collected.slice(0, 20),
        total_pages: totalPages,
    };
}
