import { type MovieModel } from '@/app/features/movie/domain/models'
import { MinusIcon, PlusIcon } from '@/app/shared/components'
import { TrashIcon } from '@/app/shared/components/icons/trash-icon'
import { useFormat } from '@/app/shared/hooks'
import { Typography } from '@mui/material'

import { useCartHandler } from '../../../hooks'
import {
  CartInfoContainer,
  Container,
  ProductInfoContainer,
  QuantityContainer,
  StyledPriceTypography,
  StyledSubtotalTypography,
  StyledTitleTypography,
  SubtotalContainer
} from './mobile-product-cart-styles'

type Props = {
  movie: MovieModel
  quantity: number
  subTotal: number
}

export const MobileProductCart = ({ movie, quantity, subTotal }: Props) => {
  const { addMovieToCart, decreaseMovieFromCart, removeMovieFromCart } =
    useCartHandler()
  const { formatBRLCurrency } = useFormat()

  const formattedPrice = formatBRLCurrency(movie.price)

  const formattedSubTotal = formatBRLCurrency(subTotal)

  const handleAddMovie = () => {
    addMovieToCart(movie)
  }

  const handleDecreaseMovie = () => {
    decreaseMovieFromCart(movie)
  }

  const handleRemoveMovie = () => {
    removeMovieFromCart(movie)
  }

  return (
    <Container>
      <img src={movie.imageUrl} alt={movie.title} />
      <div>
        <ProductInfoContainer>
          <StyledTitleTypography>{movie.title}</StyledTitleTypography>
          <StyledPriceTypography>{formattedPrice}</StyledPriceTypography>
          <TrashIcon onClick={handleRemoveMovie} />
        </ProductInfoContainer>
        <CartInfoContainer>
          <QuantityContainer>
            <MinusIcon onClick={handleDecreaseMovie} />
            <Typography>{quantity}</Typography>
            <PlusIcon onClick={handleAddMovie} />
          </QuantityContainer>
          <SubtotalContainer>
            <StyledSubtotalTypography>Subtotal</StyledSubtotalTypography>
            <StyledPriceTypography>{formattedSubTotal}</StyledPriceTypography>
          </SubtotalContainer>
        </CartInfoContainer>
      </div>
    </Container>
  )
}
