import { configureStore } from '@reduxjs/toolkit'
import { ArticleSlice } from './store/reducer'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({ reducer: ArticleSlice.reducer })

export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export default store
