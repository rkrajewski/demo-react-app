import {
  SliceCaseReducers,
  ValidateSliceCaseReducers,
  combineReducers,
  configureStore,
  createSlice,
} from '@reduxjs/toolkit'

const store = configureStore({ reducer: () => ({}) })
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalReducers: Record<string, any> = {}

export const createFeature = <S, R extends SliceCaseReducers<S>>(name: string, initialState: S, reducers: R) => {
  const slice = createSlice({ name, initialState, reducers: reducers as unknown as ValidateSliceCaseReducers<S, R> })
  const newReducer = combineReducers({
    ...globalReducers,
    [slice.name]: slice.reducer,
  })

  globalReducers[slice.name] = slice.reducer
  store.replaceReducer(newReducer)

  return slice
}

export default store
