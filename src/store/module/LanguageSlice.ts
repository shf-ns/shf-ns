import { createSlice } from '@reduxjs/toolkit'

// 为 slice state 定义一个类型
interface LanguageState {
  value: string
}

// 使用该类型定义初始 state
const initialState: LanguageState = {
  value: 'zh'
}

export const languageSlice = createSlice({
  name: 'language',
  // `createSlice` 将从 `initialState` 参数推断 state 类型
  initialState,
  reducers: {
    saveLanguage: (state:LanguageState) => {
      state.value = state.value === 'zh' ? 'en' : 'zh'
      localStorage.setItem('language', state.value)
    },
    getLanguage: (state: LanguageState) => {
      state.value = localStorage.getItem('language') || 'zh'
    }
  }
})

export const { saveLanguage, getLanguage } = languageSlice.actions
const LanguageReducer = languageSlice.reducer
export default LanguageReducer
