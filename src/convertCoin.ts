export default function moedaParaNumero(moeda: string): number | null {
  const numero = Number(moeda.replaceAll(".", "").replace(",", ".").trim());
  if (isNaN(numero)) {
    return null;
  } else {
    return numero;
  }
}
