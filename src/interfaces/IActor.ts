export interface IActor {
   id: number;
   name: string;
   profile_path: string;
}
export interface IResCast{
   id:number,
   cast:IActor[]
}