import { type RootState } from '@/core/store'
import { createSelector } from '@reduxjs/toolkit'

const chartSliceSelector = (state: RootState) => state.chart

export const chartState = createSelector(chartSliceSelector, (state) => state)
