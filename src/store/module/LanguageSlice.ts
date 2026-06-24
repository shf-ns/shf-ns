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
  initialState,
  reducers: {
    saveLanguage: (state:LanguageState, action: { payload: string }) => {
      state.value = action.payload
      localStorage.setItem('language', action.payload)
    },
    getLanguage: (state: LanguageState) => {
      state.value = localStorage.getItem('language') || 'zh'
    }
  }
})

export const { saveLanguage, getLanguage } = languageSlice.actions
const LanguageReducer = languageSlice.reducer
export default LanguageReducer
