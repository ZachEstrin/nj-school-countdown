import { atom } from "jotai";
export const PageTitleAtom=atom("Home");
export const DistEnum={
  "laz":"Robert R. Lazar Middle School",
  "wehs":"West Essex High School",
  "wems":"West Essex Middle School",
  "mcst":"Morris County School of Technology",
  "mths":"Montville Township High School",
  "mhhs":"Morris Hills High School",
  "mkhs":"Morris Knolls High School",
}
export interface IParamsAtom {
  dist:keyof typeof DistEnum;
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