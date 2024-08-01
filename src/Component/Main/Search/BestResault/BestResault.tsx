import style from "./BestResault.module.css"
import { useAppSelector } from '../../../../hooks'
import { BestArtistBlock } from "./BestArtistBlock/BestArtistBlock";
import { Item, SpotifyData } from "../../../../types/SearchForItemType";
import { useEffect, useState } from "react";


interface ItemWithMatchScore extends Item {
  matchScore: number;
}

export default function BestResault() {
  const { searchList, loading, error, search } = useAppSelector(state => state.searchItem);
  const [filteredResults, setFilteredResults] = useState<ItemWithMatchScore[]>([]);

  useEffect(() => {
    if (searchList && search) {
      const filtered = filterResults(searchList, search);
      setFilteredResults(filtered);
    }
  }, [searchList, search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!filteredResults || filteredResults.length === 0) {
  }
  if(search.length === 0 ){
    loading == false
    return <div>No results found.</div>;
  }
  function filterResults(searchList: SpotifyData, search: string): ItemWithMatchScore[] {
    const lowerCaseSearch = search.toLowerCase();
    const searchWords = lowerCaseSearch.split(' ');

    const tracks = searchList.tracks.items;
    const filteredTracks: ItemWithMatchScore[] = [];

    for (let track of tracks) {
      const trackNameLower = track.name.toLowerCase();
      const artistNamesLower = track.artists?.map(artist => artist.name.toLowerCase()) ?? [];
      const genresLower = track.genres?.map(genre => genre.toLowerCase()) ?? [];
      const albumNameLower = track.album?.name.toLowerCase() ?? '';

      let matchScore = 0;

      if (artistNamesLower.includes(lowerCaseSearch) || trackNameLower === lowerCaseSearch) {
        matchScore += 3;
      }

      if (artistNamesLower.some(name => searchWords.some(word => name.includes(word))) || searchWords.some(word => trackNameLower.includes(word))) {
        matchScore += 2;
      }

      if (artistNamesLower.some(name => name.includes(lowerCaseSearch)) || trackNameLower.includes(lowerCaseSearch)) {
        matchScore += 1;
      }

      if (genresLower.some(genre => genre.includes(lowerCaseSearch)) || albumNameLower.includes(lowerCaseSearch)) {
        matchScore += 1;
      }

      if (matchScore > 0) {
        filteredTracks.push({ ...track, matchScore });
      }
    }

    filteredTracks.sort((a, b) => {
      if (b.matchScore === a.matchScore) {
        return (b.popularity ?? 0) - (a.popularity ?? 0);
      }
      return b.matchScore - a.matchScore;
    });

    return filteredTracks;
  }

  return (
    <div className={style.BestResault}>
      <BestArtistBlock filteredResults={filteredResults}/>
    </div>
  );
}