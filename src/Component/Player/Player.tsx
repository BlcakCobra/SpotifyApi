import  { useEffect } from 'react'
import style from "./Player.module.css"
import { useAppDispatch, useAppSelector } from '../../hooks'
import { AsyncCurrentPlayer } from '../../store/Slices/PlayerSlice'

export default function Player() {
  const dispatch = useAppDispatch()
  const {searchList} = useAppSelector(state => state.searchItem)

  return (
    <div className={style.Player}>
      <audio controls> 
        <source src=''/>
      </audio>
    </div>
  )
}
