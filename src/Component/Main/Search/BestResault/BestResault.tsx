import React from 'react'
import style from "./BestResault.module.css"
import { useAppSelector } from '../../../../hooks'


export default function BestResault() {
  const { searchList, loading } = useAppSelector(state => state.searchItem);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (searchList == undefined) {
    return <div>No results found.</div>;
  }

  console.log(searchList);

  return (
    <div className={style.BestResault}>
        <div className={style.FirstBlock}>
            <h1 className={style.Best_title}>Лучший результат</h1>
            <div className={style.Singer_box}>
                <div className={style.Items}>
                  <div className={style.circle_Image}></div>
                </div>
            </div>
        </div>
    </div>
  );
}