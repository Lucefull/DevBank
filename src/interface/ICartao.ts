export interface ICartao {
  id: number;
  color?: string;
  nome: string;
  valorCredito: number;
  utilizado: number;
  dataVencimento: number;
  final: string;
  valorFatura: number;
}
