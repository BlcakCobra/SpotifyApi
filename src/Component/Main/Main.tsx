import { Route, Routes } from "react-router-dom"
import style from "./Main.module.css"
import DefaultMain from "./DeafaultMain/DeafaultMain"


export default function Main() {
  return (
    <div className={style.Main}>
    <Routes>
      <Route path="/" element={<DefaultMain/>}/>
    </Routes>
    </div>
  )
}
