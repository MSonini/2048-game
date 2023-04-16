import { type TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'

import { type AppDispatch, type RootState } from '..'

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
