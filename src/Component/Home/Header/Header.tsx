
import Main from "../../Main/Main"
import style from "./Header.module.css"
import NavBar from "./NavBar/NavBar"

export default function Header() {
  return (
    <div className={style.Header}>
      <NavBar />
      <Main />
    </div>
  );
}