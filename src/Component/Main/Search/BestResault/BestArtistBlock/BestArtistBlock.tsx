import style from "./BestArtistBlock.module.css"

export default function BestArtistBlock() {
  console.log("fomfoas");
  
  return (
    <div className={style.FirstBlock}>
    <h1 className={style.Best_title}>Лучший результат</h1>
    <div className={style.Singer_box}>
        <div className={style.Items}>
          <div className={style.circle_Image}></div>
        </div>
    </div>
</div>
  )
}
