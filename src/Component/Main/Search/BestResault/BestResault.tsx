import React from 'react'
import style from "./BestResault.module.css"
import { useAppSelector } from '../../../../hooks'
import BestArtistBlock from './BestArtistBlock/BestArtistBlock';


export default function BestResault() {
  const { searchList, loading, error } = useAppSelector(state => state.searchItem);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!searchList || Object.keys(searchList).length === 0) {
    return <div>No results found.</div>;
  }

  console.log(searchList);

  return (
    <div className={style.BestResault}>
         {searchList?.tracks.items.map((el) =>{
        return (
          <BestArtistBlock/>
        )
      })}
    </div>
  );
}