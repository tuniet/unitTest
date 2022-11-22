
// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromEuroToDollar(eur){
    let ret = eur * oneEuroIs.USD;
    return Number(ret.toFixed(1));
}
function fromDollarToYen(usd){
    let ret = (usd * oneEuroIs.JPY) / oneEuroIs.USD;
    return Number(ret.toFixed(1));
}
function fromYenToPound(yen){
    let ret = (yen * oneEuroIs.GBP) / oneEuroIs.JPY;
    return Number(ret.toFixed(1));
}