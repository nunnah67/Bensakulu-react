function computeConsumption(){
    let distance = document.getElementById('distance').value;
    let fuel = document.getElementById('fuel').value;
    let costper = document.getElementById('costper').value;
    let consumed =  (fuel / (distance/100)).toFixed(2);
    let costper100 = (consumed * costper).toFixed(2);
    document.getElementById('consumption').innerHTML = "Consumption is "+consumed+" Litres/100km ( $ " + costper100 + " / 100km ) <br><br>Total Fuel cost = $ " + (fuel*costper).toFixed(2);
  }