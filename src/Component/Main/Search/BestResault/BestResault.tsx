import style from "./BestResault.module.css";
import { useAppSelector } from '../../../../hooks';
import { BestArtistBlock } from "./BestArtistBlock/BestArtistBlock";
import { Item, SpotifyData } from "../../../../types/SearchForItemType";
import { useEffect, useState } from "react";

export interface ItemWithMatchScore extends Item {
  matchScore: number;
  type: string; 
}

export default function BestResault() {
  const { searchList, loading, error, search } = useAppSelector(state => state.searchItem);
  const [bestResult, setBestResult] = useState<ItemWithMatchScore | null>(null);

  useEffect(() => {
    if (searchList && search) {
      const best = filterResults(searchList, search);
      setBestResult(best);
    }
  }, [searchList, search]);
  
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!bestResult) {
    return <div>No results found.</div>;
  }

  function filterResults(searchList: SpotifyData, search: string): ItemWithMatchScore | null {
    const lowerCaseSearch = search.toLowerCase();
    const searchWords = lowerCaseSearch.split(' ');

    const filteredResults: ItemWithMatchScore[] = [];

    const processItems = (items: Item[], type: string) => {
      for (let item of items) {
        const itemNameLower = item.name.toLowerCase();
        const artistNamesLower = item.artists?.map(artist => artist.name.toLowerCase()) ?? [];
        const genresLower = item.genres?.map(genre => genre.toLowerCase()) ?? [];
        const albumNameLower = item.album?.name.toLowerCase() ?? '';

        let matchScore = 0;

        if (artistNamesLower.includes(lowerCaseSearch) || itemNameLower === lowerCaseSearch) {
          matchScore += 3;
        }

        if (artistNamesLower.some(name => searchWords.some(word => name.includes(word))) || searchWords.some(word => itemNameLower.includes(word))) {
          matchScore += 2;
        }

        if (artistNamesLower.some(name => name.includes(lowerCaseSearch)) || itemNameLower.includes(lowerCaseSearch)) {
          matchScore += 1;
        }

        if (genresLower.some(genre => genre.includes(lowerCaseSearch)) || albumNameLower.includes(lowerCaseSearch)) {
          matchScore += 1;
        }

        if (matchScore > 0) {
          filteredResults.push({ ...item, matchScore, type });
        }
      }
    };

    if (searchList.tracks?.items) {
      processItems(searchList.tracks.items, 'track');
    }
    if (searchList.artists?.items) {
      processItems(searchList.artists.items, 'artist');
    }
    if (searchList.albums?.items) {
      processItems(searchList.albums.items, 'album');
    }

    filteredResults.sort((a, b) => {
      if (b.matchScore === a.matchScore) {
        return (b.popularity ?? 0) - (a.popularity ?? 0);
      }
      return b.matchScore - a.matchScore;
    });

    return filteredResults.length > 0 ? filteredResults[0] : null;
  }

  return (
    <div className={style.BestResault}>
      <BestArtistBlock bestResult={bestResult}/>
    </div>
  );
}