import { createSlice, type Reducer } from '@reduxjs/toolkit'

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
    saveLanguage: (state:LanguageState, action: { payload: string }): void => {
      state.value = action.payload
      localStorage.setItem('language', action.payload)
    },
    getLanguage: (state: LanguageState): void => {
      state.value = localStorage.getItem('language') || 'zh'
    }
  }
})

export const { saveLanguage, getLanguage } = languageSlice.actions
const LanguageReducer: Reducer<LanguageState> = languageSlice.reducer
export default LanguageReducer
