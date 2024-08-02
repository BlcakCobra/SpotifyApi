import React from "react";
import style from "./BestArtistBlock.module.css";
import { BestArtistBlockProps } from "../../../../../types/ComponentsType";


export const BestArtistBlock: React.FC<BestArtistBlockProps> = ({ bestResult }) => {
  if (!bestResult) {
    return <div>No results found.</div>;
  }

  const artist = bestResult.artists ? bestResult.artists[0] : null;
  const artistImage = artist && artist.images ? artist.images[0].url : null;
  const albumImage = bestResult.album && bestResult.album.images ? bestResult.album.images[0].url : null;
  const imageUrl = artistImage || albumImage || '';

  return (
    <div className={style.FirstBlock}>
      <h1 className={style.Best_title}>Лучший результат</h1>
      <div className={style.Singer_box}>
        <div className={style.Items}>
          <div 
            className={style.circle_Image} 
            style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }} 
          />
          <div className={style.trackInfo}>
            <p>{bestResult.name}</p>
            <p>{artist ? artist.name : ''}</p>
            <p>{bestResult.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};