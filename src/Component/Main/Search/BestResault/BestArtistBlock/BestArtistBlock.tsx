import React from "react"
import style from "./BestArtistBlock.module.css"
import { BestArtistBlockType } from "../../../../../types/ComponentsType"

export const BestArtistBlock: React.FC<BestArtistBlockType> = ({ filteredResults }) => {
  if (filteredResults.length === 0) {
    return <div>No results found.</div>;
  }

  const bestResult = filteredResults[0]; 
  const artist = bestResult.artists ? bestResult.artists[0] : null;
  const artistImage = artist && artist.images && artist.images.length > 0 ? artist.images[0].url : '';
  const trackImage = bestResult.album && bestResult.album.images && bestResult.album.images.length > 0 ? bestResult.album.images[0].url : '';

  return (
    <div className={style.FirstBlock}>
      <h1 className={style.Best_title}>Лучший результат</h1>
      <div className={style.Singer_box}>
        <div className={style.Items}>
          <div 
            className={style.circle_Image} 
            style={{ backgroundImage: artistImage ? `url(${artistImage})` : (trackImage ? `url(${trackImage})` : 'none') }} 
          />
          <div className={style.trackInfo}>
            <p className={style.BestResultName}>{artist ? artist.name : 'Unknown Artist'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};