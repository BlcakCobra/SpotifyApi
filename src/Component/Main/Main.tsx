import style from "./Main.module.css"
import DefaultMain from "./DeafaultMain/DeafaultMain"
import { Route, Routes } from "react-router-dom"
import Search from "./Search/Search";

export default function Main() {
  return (
    <div className={style.Main}>
      <Routes>
        <Route path="/" element={<DefaultMain />} />
        <Route path="home" element={<DefaultMain />} />
        <Route path="home/search" element={<Search />} />
      </Routes>
    </div>
  );
}