import { useCartHandler } from '@/app/features/cart/hooks'
import { CartIcon } from '@/app/shared/components'
import { useFormat } from '@/app/shared/hooks'

import { type MovieModel } from '../../../domain/models'
import {
  Container,
  InfoContainer,
  PriceTypography,
  StyledButton,
  TitleTypography
} from './movie-item-styles'

type Props = {
  movie: MovieModel
}

export const MovieItem = ({ movie }: Props) => {
  const { movieQuantity, addMovieToCart } = useCartHandler()
  const { formatBRLCurrency } = useFormat()

  const formattedPrice = formatBRLCurrency(movie.price)

  const handleAddMovie = () => {
    addMovieToCart(movie)
  }

  const movieQuantityAdded = movieQuantity(movie)

  return (
    <Container>
      <img src={movie.imageUrl} alt={movie.title} />
      <InfoContainer>
        <TitleTypography>{movie.title}</TitleTypography>
        <PriceTypography>{formattedPrice}</PriceTypography>
      </InfoContainer>
      <StyledButton
        alreadyAdded={Boolean(movieQuantityAdded)}
        onClick={handleAddMovie}
      >
        <div>
          <CartIcon />
          {movieQuantityAdded}
        </div>
        <span>Adicionar ao carrinho</span>
      </StyledButton>
    </Container>
  )
}
