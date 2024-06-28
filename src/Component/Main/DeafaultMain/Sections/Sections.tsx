import style from "./Sections.module.css"
import { SectionsType } from "../../../../types/ComponentsType"
import { NavLink } from "react-router-dom"

export const Sections: React.FC<SectionsType> = ({ sectionName, chooseSection }) => {
  return (
    <>
      <div className={style.Sections}>
        <div className={style.secDiv}>
          {sectionName.map((el, index) => {
            return (
              <div key={index} className={style.Section} onClick={() => { chooseSection(el) }}>
                <NavLink to={`/${el}`}>
                  {el}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};