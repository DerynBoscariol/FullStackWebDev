
var fruitBasket = ["apples", "oranges", "grapes"];

export function addFruit (newFruit){
    fruitBasket.push(newFruit);
    console.log(fruitBasket);
}

export function countFruit (){
    console.log(fruitBasket.length);
}