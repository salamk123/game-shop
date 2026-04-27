import { useDispatch, useSelector } from "react-redux";
import { appDispatch, RootState } from "../store/store";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<appDispatch>();