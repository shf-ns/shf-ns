import { createSlice, type PayloadAction, type Reducer } from '@reduxjs/toolkit'

// 为 slice state 定义一个类型
interface TimeState {
  value: string
}

// 使用该类型定义初始 state
const initialState: TimeState = {
  value: ''
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    saveTime: (state:TimeState, action: PayloadAction<string>): void => {
      state.value = action.payload
      localStorage.setItem('time', action.payload)
    },
    getTime: (state: TimeState): void => {
      state.value = initialState.value
    },
  }
})

export const { saveTime, getTime } = themeSlice.actions
const TimeReducer: Reducer<TimeState> = themeSlice.reducer
export default TimeReducer
