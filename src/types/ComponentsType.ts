import { ItemWithMatchScore } from "../Component/Main/Search/BestResault/BestResault";

export type SectionsType = {
    sectionName:string[]
    chooseSection:(name:string) => void
}

export  interface BestArtistBlockProps {
    bestResult: ItemWithMatchScore | null;
  }
  