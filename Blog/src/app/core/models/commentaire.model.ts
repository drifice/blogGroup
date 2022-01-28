import {IUser} from "./user.model";

export interface ICommentaire {
  id: string,
  contenu: string,
  utilisateurId: string,
  utilisateur: IUser
}
