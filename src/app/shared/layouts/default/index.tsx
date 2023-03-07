import { Suspense } from 'react'

import { FullPageLoading, Header } from '@/app/shared/components'

import { Container } from './default-layout-styles'

type Props = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<FullPageLoading />}>{children}</Suspense>
    </Container>
  )
}
