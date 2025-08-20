import fetchData from "./fetchData.js";
import transformData from "./transformData.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  );
  if (!data) return;
  const transacoes = data.map(transformData);
  transacoes.forEach((item) => {
    console.log(item.valor);
  });
}

handleData();
