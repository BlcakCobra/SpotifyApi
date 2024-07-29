import style from "./BestResault.module.css"
import { useAppSelector } from '../../../../hooks'
import { BestArtistBlock } from "./BestArtistBlock/BestArtistBlock";
import { Item, SpotifyData } from "../../../../types/SearchForItemType";


export default function BestResault() {
  const { searchList, loading, error, search } = useAppSelector(state => state.searchItem);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!searchList || Object.keys(searchList).length === 0) {
    return <div>No results found.</div>;
  }

  function filterResults(searchList: SpotifyData, search: string): Item[] {
    const tracks = searchList.tracks.items;
    const filteredTracks: Item[] = tracks.filter(track => {
      const artistFound = track?.artists?.some(artist => artist.name.toLowerCase().includes(search.toLowerCase()));
      return artistFound;
    });

    filteredTracks.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));

    return filteredTracks;
  }
  
  const filteredResults = filterResults(searchList, search);
  console.log(filteredResults);

  return (
    <div className={style.BestResault}>
         <BestArtistBlock filteredResults={filteredResults}/>
    </div>
  );
}