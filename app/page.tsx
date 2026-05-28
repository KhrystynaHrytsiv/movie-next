import {generalService} from "@/src/service/generalService";
import {IResponse} from "@/src/interfaces";
import Home from '../src/components/home/Home'

export default async function  HomePage() {
  const {results} = await generalService.get<IResponse>('movie/now_playing');
  return (
  <>
    <Home movies={results} />
  </>
  );
}
