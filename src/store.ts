import { atom } from "jotai";
export const PageTitleAtom=atom("Home");
export interface IParamsAtom {
  dist:string;
  targ:string;
}
export const urlParams=new URLSearchParams(window.location.search);
const revertNullToEmptyString=(x:string|null)=>{return x==null?"":x;}
const dist:string=revertNullToEmptyString(urlParams.get('dist'));
const targ:string=revertNullToEmptyString(urlParams.get('targ')); //targ = target (End Date / Start Date)
export const ParamsAtom=atom({dist,targ});
export const DerivedParamsAtom=atom(
  (get)=>get(ParamsAtom),
  (get,set,update:[keyof IParamsAtom,any])=>
    set(ParamsAtom,{
      ...get(ParamsAtom),
      [update[0]]:update[1],
    }),
);