import { type TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from '@/store'

// 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector