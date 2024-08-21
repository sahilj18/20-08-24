
function convertToNum(amount) {
  let amountInt;

  // Remove $
  amountInt = amount.slice("1");

  // Replace ,
  amountInt = amountInt.replace(",", "");

  // Convert to num
  return parseInt(amountInt);
}

function itemsPurchased(store, wallet) {
  // Creating empty list
  const filteredItems = [];

  // Converting wallet to a num
  wallet = convertToNum(wallet);

  // Iterating over store items
  for (let item in store) {
    if (convertToNum(store[item]) <= wallet) {
      filteredItems.push(item);
    }
  }

  return filteredItems.length > 0 ? filteredItems.sort() : "Nothing";
}

const x = itemsPurchased(
  {
    Apple: "$4",
    Honey: "$3",
    Fan: "$14",
    Bananas: "$4",
    Pan: "$100",
    Spoon: "$2",
  },
  "$100"
);
console.log(x);

// ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]
