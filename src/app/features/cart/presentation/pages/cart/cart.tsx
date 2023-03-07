import { useCartHandler } from '../../../hooks'
import { DesktopView, EmptyCart, MobileView } from '../../components'

const Cart = () => {
  const { quantity } = useCartHandler()

  if (quantity === 0) {
    return <EmptyCart />
  }

  return (
    <>
      <MobileView />
      <DesktopView />
    </>
  )
}

export default Cart
