export const numberCurrency = (value: number) =>
  value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
