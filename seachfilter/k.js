const deck = [10, 1, 5, 3, 2, 8, 7];

function sandwichTrick(deck) {
    const l = deck.sort((item1, item2) => {
        if (item1 < item2){
            console.log(-1,"qqqqqqqq")
        }
        if(item1 > item2){
            console.log(1, "wwwwwww")
        }
        console.log(0, "eeeeee")
    })
    console.log(l)
    return l 
      
}

sandwichTrick(deck);
// Output: 10
//         [1, 2, 3, 5, 7, 8, 10]
