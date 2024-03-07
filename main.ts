type Odber = {
    cas: number; //min
    prikon: number; //Watt
}
// 6kc za Watthodinu
let data: Array<Odber> = [
    { cas: 100, prikon: 3500, },
    { cas: 120, prikon: 3300, },
    { cas: 300, prikon: 3600, },
    { cas: 400, prikon: 3500, },
    { cas: 220, prikon: 3700, },
];


let totalPrikon = 0;
for (const item of data) {
    totalPrikon += item.prikon;
}

const averagePrikon = totalPrikon / data.length;
console.log(averagePrikon);


let totalTime = 0;
for (const item of data) {
    totalTime += item.cas;
}

let celkovyCas = totalTime;
console.log(celkovyCas);
let celkemWh = celkovyCas * averagePrikon;
let celkovaCena = (celkemWh / 360); // převod minut na hodiny a 6kc za hodinu //
console.log(celkovaCena + " Kč");



