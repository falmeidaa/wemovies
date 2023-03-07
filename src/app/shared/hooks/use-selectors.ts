import { chartState } from '@/app/features/cart/store'
import { useAppSelector } from '@/core/store'

export const Cart = () => useAppSelector(chartState)
