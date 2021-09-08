function orbitalPeriod(arr) {

  //declarando variáveis para os valores fixos
  let GM = 398600.4418;
  let earthRadius = 6367.4447;

  //variáveis para armazenar o PI multiplicado por dois e
  //o periodo orbital a ser calculado
  let twoTimesPI = 2 * Math.PI;
  let orbitalPeriod = 0;

  //iterando sobre cada objeto
  for (let i = 0; i < arr.length; i++){
    //calculando o "a" da fórmula
    let a = Math.pow(earthRadius + arr[i].avgAlt, 3);
    
    //realizando cáculos para obter o período orbital
    orbitalPeriod = Math.round(twoTimesPI * Math.sqrt(a / GM));
    
    //alterando array original
    delete arr[i].avgAlt;
    arr[i].orbitalPeriod = orbitalPeriod;
}
  return arr;
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
