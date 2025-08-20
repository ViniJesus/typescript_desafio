export default function moedaParaNumero(moeda) {
    const numero = Number(moeda.replaceAll(".", "").replace(",", ".").trim());
    if (isNaN(numero)) {
        return null;
    }
    else {
        return numero;
    }
}
//# sourceMappingURL=convertCoin.js.map