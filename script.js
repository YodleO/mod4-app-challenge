function kToC(){
    const degK = document.getElementById("degK"); 
   
    degK1 = Number(degK.value);

    let celcius = degK1 - 273.15;

    celcius = round(celcius,2)

    c_degrees.innerHTML = `Degrees in Celcius: ${celcius}`;
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }