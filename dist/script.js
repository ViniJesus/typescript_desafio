import Estatisticas from "./Estatisticas.js";
import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json?");
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    preencherTabela(transacoes);
    preencherEstatisticas(transacoes);
}
function preencherEstatisticas(transacoes) {
    const total = document.querySelector("#total span");
    const pagamento = document.getElementById("pagamento");
    const status = document.getElementById("status");
    const data = new Estatisticas(transacoes);
    if (pagamento) {
        Object.keys(data.pagamento).forEach((key) => {
            pagamento.innerHTML += `<p>${key}: ${data.pagamento[key]}</p>`;
        });
    }
    if (status) {
        Object.keys(data.status).forEach((key) => {
            status.innerHTML += `<p>${key}: ${data.status[key]}</p>`;
        });
    }
    if (!total)
        return;
    total.innerText = data.total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    const diaElement = document.querySelector("#dia span");
    if (diaElement) {
        diaElement.innerText = data.melhorDia[0];
    }
}
function preencherTabela(transacoes) {
    const tabela = document.querySelector("#table-info tbody");
    if (!tabela)
        return;
    transacoes.forEach((transacao) => {
        tabela.innerHTML += `
      <tr>
        <td class="border border-gray-300 py-2 px-4 bg-gray-500 text-white">${transacao.nome}</td>
        <td class="border border-gray-300 py-2 px-4 bg-gray-500 text-white">${transacao.email}</td>
        <td class="border border-gray-300 py-2 px-4 bg-gray-500 text-white">R$ ${transacao.moeda}</td>
        <td class="border border-gray-300 py-2 px-4 bg-gray-500 text-white">${transacao.pagamento}</td>
        <td class="border border-gray-300 py-2 px-4 bg-gray-500 text-white">${transacao.status}</td>
      </tr>
    `;
    });
}
handleData();
//# sourceMappingURL=script.js.map