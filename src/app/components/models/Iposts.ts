import { Icomment } from "./Icomment";
import { Idata } from "./Idata";
import { IUser } from "./Iuserdata";

export interface Ipost
{
    
    userdata : IUser;
    postdata : Idata;
    comment ?: Icomment;
}