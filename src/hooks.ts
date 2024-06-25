import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from "../src/store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected,
) => useSelector<RootState, TSelected>(selector); 