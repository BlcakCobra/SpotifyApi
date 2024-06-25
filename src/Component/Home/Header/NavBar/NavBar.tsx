import FirstBlock from "./FirstBlock/FirstBlock"
import style from "./NavBar.module.css"
import SecondBlock from "./SecondBlock/SecondBlock"

export default function NavBar() {
  return (
    <div className={style.NavBar}>
        <FirstBlock/>
        <SecondBlock/>
    </div>
)
}
