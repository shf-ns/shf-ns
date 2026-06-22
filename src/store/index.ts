import { configureStore } from '@reduxjs/toolkit'
import LanguageReducer from '@store/module/LanguageSlice'

const store = configureStore({
  reducer: {
    language: LanguageReducer
  }
})

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store