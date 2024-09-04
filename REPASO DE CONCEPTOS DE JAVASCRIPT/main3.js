function timeToMixJuice(name) {
    let time;
    if(name === "Pure Strawberry Joy"){
      return time = 0.5
    }else if(name === "Energizer" || name === "Green Garden"){
      return time = 1.5
    }else if(name === "Tropical Island"){
      return time = 3
    }else if(name === "All or Nothing"){
      return time = 5
    }else{
      return time = 2.5
    }
      
}

remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']);

function remainingOrders(timeLeft, orders) {
    while (timeLeft > 0){
      timeLeft = timeLeft - timeToMixJuice(orders[0])
      orders.shift()
      console.log(timeLeft)
      
    }
    return console.log(orders);
}
// 

console.log(remainingOrders(timeLeft , orders))