import moedaParaNumero from "./convertCoin.js";
import stringToDate from "./convertDate.js";
export default function transformData(transacao) {
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
//# sourceMappingURL=transformData.js.map