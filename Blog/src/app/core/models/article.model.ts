import { ICategorie } from "./categorie.model";
import { ITag } from "./tag.model";
import { IUser } from "./user.model";

export interface IArticle {
    titre :string,
    slug :string,
    description :string,
    dateDeCreation :Date,
    contenu :string,
    auteur : IUser,
    imageDePresentation: string,
    categorie: ICategorie,
    listeDeTag: ITag[]
}