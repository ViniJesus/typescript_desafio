import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  );
  if (!data) return;
  const transacoes = data.map(normalizarTransacao);
  preencherTabela(transacoes);
}

function preencherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector("#table-info tbody");
  if (!tabela) return;
  transacoes.forEach((transacao) => {
    console.log(transacao);
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
