import {generalService} from "@/src/service/generalService";
import {IResVideo} from "@/src/interfaces";
import {video_path} from "@/src/constants/url";

const Trailer = async ({id}:{id:string}) => {
    const {results:video} = await generalService.get<IResVideo>(`/movie/${id}/videos`);
    const trailer =  video.find(v => v.site === 'YouTube' && v.type === 'Trailer');
    return (
        <div className='fixed inset-0 w-screen h-screen'>
            {trailer ?
                (<iframe key={trailer.id} src={`${video_path}${trailer.key}`} title={trailer.name}  className="w-full h-full" allowFullScreen></iframe>)
                : (<h1 className='text-6xl flex items-center justify-center h-screen'>Sorry, but trailer not found</h1>)}
        </div>
    );
};

export default Trailer;