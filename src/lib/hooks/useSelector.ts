import { TypedUseSelectorHook, useSelector as legacyUseSelector } from 'react-redux'
import { RootState } from '@/modules/rootReducer'

export const useSelector: TypedUseSelectorHook<RootState> = legacyUseSelector
