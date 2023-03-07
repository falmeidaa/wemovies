import { type MovieModel } from '@/app/features/movie/domain/models'
import { MinusIcon, PlusIcon } from '@/app/shared/components'
import { TrashIcon } from '@/app/shared/components/icons/trash-icon'
import { useFormat } from '@/app/shared/hooks'
import { Typography } from '@mui/material'

import { useCartHandler } from '../../../hooks'
import {
  ProductInfoContainer,
  QuantityContainer,
  StyledPriceTypography,
  StyledSubtotalTypography,
  StyledTitleTypography,
  SubtotalContainer,
  TrashContainer
} from './desktop-product-cart-styles'

type Props = {
  movie: MovieModel
  quantity: number
  subTotal: number
}

export const DesktopProductCart = ({ movie, quantity, subTotal }: Props) => {
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
    <>
      <ProductInfoContainer>
        <img src={movie.imageUrl} alt={movie.title} />
        <div>
          <StyledTitleTypography>{movie.title}</StyledTitleTypography>
          <StyledPriceTypography>{formattedPrice}</StyledPriceTypography>
        </div>
      </ProductInfoContainer>
      <QuantityContainer>
        <MinusIcon onClick={handleDecreaseMovie} />
        <Typography>{quantity}</Typography>
        <PlusIcon onClick={handleAddMovie} />
      </QuantityContainer>
      <SubtotalContainer>
        <StyledSubtotalTypography>{formattedSubTotal}</StyledSubtotalTypography>
      </SubtotalContainer>
      <TrashContainer>
        <TrashIcon onClick={handleRemoveMovie} />
      </TrashContainer>
    </>
  )
}
