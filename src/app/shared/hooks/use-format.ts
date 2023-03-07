export const useFormat = () => {
  const formatBRLCurrency = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)

  return {
    formatBRLCurrency
  }
}
