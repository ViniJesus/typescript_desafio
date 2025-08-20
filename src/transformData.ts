import moedaParaNumero from "./convertCoin.js";
import stringToDate from "./convertDate.js";

declare global {
  type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
  type TransacaoStatus =
    | "Paga"
    | "Recusada pela operadora de cartão"
    | "Agurdando pagamento"
    | "Estornada";

  interface TransacaoAPI {
    Nome: string;
    ID: number;
    Data: string;
    Status: TransacaoStatus;
    Email: string;
    ["Valor (R$)"]: string;
    ["Forma de Pagamento"]: TransacaoPagamento;
    ["Cliente Novo"]: number;
  }

  interface Transacao {
    nome: string;
    id: number;
    data: string;
    status: TransacaoStatus;
    email: string;
    moeda: string;
    valor: number | null;
    formaDePagamento: TransacaoPagamento;
    clienteNovo: boolean;
  }
}

export default function transformData(transacao: TransacaoAPI) {
  return {
    nome: transacao.Nome,
    id: transacao.ID,
    data: stringToDate(transacao.Data),
    status: transacao.Status,
    email: transacao.Email,
    moeda: transacao["Valor (R$)"],
    valor: moedaParaNumero(transacao["Valor (R$)"]),
    formaDePagamento: transacao["Forma de Pagamento"],
    clienteNovo: Boolean(transacao["Cliente Novo"]),
  };
}
