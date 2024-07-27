import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { AsyncSearchItem, SearchSomething } from "../../../store/Slices/SearchSlice";
import style from "./Search.module.css";
import BestResault from "./BestResault/BestResault";

export default function Search() {
  const {loading,search, searchList } = useAppSelector((state) => state.searchItem);
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (e:any) => {
      dispatch(SearchSomething(e.target.value));
    },
    [dispatch]
  );

  useEffect(() => {
    if (search) {
      dispatch(AsyncSearchItem(search));
    }
  }, [search]);


  return (
    <>
    <div className={style.SearchMain}>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        className={style.SearchInput}
        placeholder="Что хочешь найти ? "
      />
    </div>
    {loading && <p>Loading...</p>}
      {searchList === null ? (
        <div>Null</div>
      ) 
       : (
        <div className={style.Resault}>
          <BestResault/>
        </div>
      )}
    </>
  );
}