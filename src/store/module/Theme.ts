import { createSlice } from '@reduxjs/toolkit'

// 为 slice state 定义一个类型
interface ThemeState {
  value: string
}

// 使用该类型定义初始 state
const initialState: ThemeState = {
  value: 'light'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    saveTheme: (state:ThemeState) => {
      state.value = state.value === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', state.value)
    },
    getTheme: (state: ThemeState) => {
      state.value = localStorage.getItem('theme') || 'light'
    }
  }
})

export const { saveTheme, getTheme } = themeSlice.actions
const ThemeReducer = themeSlice.reducer
export default ThemeReducer
