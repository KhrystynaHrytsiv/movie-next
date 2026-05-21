import {generalService} from "@/src/services/generalService";
import {IResVideo} from "@/src/interfaces";

const Trailer = async ({id}:{id:string}) => {
    const {results:video} = await generalService.get<IResVideo>(`/movie/${id}/videos`);
    const trailer =  video.find(v => v.site === 'YouTube' && v.type === 'Trailer');
    return (
        <div className='fixed inset-0 w-screen h-screen'>
            {trailer ?
                (<iframe key={trailer.id} src={`https://www.youtube.com/embed/${trailer.key}`} title={trailer.name}  className="w-full h-full" allowFullScreen></iframe>)
                : (<h1>Trailer not found</h1>)}
        </div>
    );
};

export default Trailer;