import { IUser } from "./user.model";

export interface ICommentaire { 
    contenu :string,
    user: IUser
}