import { Route, Routes } from "react-router-dom"
import style from "./Main.module.css"
import DefaultMain from "./DeafaultMain/DeafaultMain"
import All from "./DeafaultMain/All/All"
import Music from "./DeafaultMain/Music/Music"
import Audio from "./DeafaultMain/Audio/Audio"


export default function Main() {
  return (
    <div className={style.Main}>
    <Routes>
      <Route path="/" element={<DefaultMain/>}/>
      <Route path="/Все" element={<All/>}/>
      <Route path="/Музыка" element={<Music/>}/>
      <Route path="/Аудио" element={<Audio/>}/>
    </Routes>
    </div>
  )
}
