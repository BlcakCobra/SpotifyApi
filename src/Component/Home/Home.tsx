import { Outlet } from "react-router-dom";
import Player from "../Player/Player"
import Header from "./Header/Header"
import style from "./Home.module.css"

export default function Home() {
  return (
    <div className={style.Home}>
      <Header />
      <Outlet/>
      <Player />
    </div>
  );
}