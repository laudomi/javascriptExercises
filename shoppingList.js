//Request the user an item.
const readline = require("readline-sync");
let item = readline.question("Introduce an item(stop): ");

//An array is declared for the shopping list.
let shoppingList = [];

//While the item introduced by the user is not the word "stop"
while (item !== "stop"){

    //If the item isn't in the list, the item will be added.
    if (!shoppingList.includes(item)){
        shoppingList.push(item);
    }
    //Request the user another item.
    item = readline.question("Introduce an item(stop): ");
}

/*
If the user enters the word "stop" it will be shown 
the shopping list.
*/
console.log(shoppingList);

