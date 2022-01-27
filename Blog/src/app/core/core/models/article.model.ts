import { ICategorie } from "./categorie.model";
import { ITag } from "./tag.model";

export interface IArticle {
    titre :string,
    slug :string,
    description :string,
    dateDeCreation :Date,
    contenu :string,
    auteur : string,
    imageDePrésentation: string,
    categorie: ICategorie,
    listeDeTag: ITag[]
}