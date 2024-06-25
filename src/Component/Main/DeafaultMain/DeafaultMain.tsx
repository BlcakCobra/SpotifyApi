import { useState } from "react"
import style from "./DefaultMain.module.css"
import { Sections } from "./Sections/Sections"
import All from "./All/All"
import Music from "./Music/Music"
import Audio from "./Audio/Audio"

export default function DefaultMain() {  

  const sectionName = ["Все", "Музыка", "Аудио"];

  const [section, setSection] = useState(sectionName[0]);

  function chooseSection(name: string) {
    setSection(name);
    
  }

  return (
    <>
      <div className={style.controlMain}></div>
      <Sections sectionName={sectionName} chooseSection={chooseSection} />
      {
        section === sectionName[0] ? <All /> :
        section === sectionName[1] ? <Music /> :
        section === sectionName[2] ? <Audio/>: null
      }
    </>
  );
}