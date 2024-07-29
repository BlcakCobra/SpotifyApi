import { Item, SpotifyData } from "./SearchForItemType"

export type SectionsType = {
    sectionName:string[]
    chooseSection:(name:string) => void
}

export type BestArtistBlockType = {
    filteredResults: Item[];
  };