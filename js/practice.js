// const userInput = prompt('Як звати твого домащнього улюбленця?');
// if (userInput === 'Аліса') {
//   alert('молодець!!!');
// } else if (userInput === 'Оскар') {
//   alert('молодець!!!');
// } else if (userInput === 'Джесі') {
//   alert('молодець!!!');
// } else {
//   alert('Пу-пу-пу, думай ще(((');
// 


function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line

  if (totalSpent >= 5000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else {
    discount = BASE_DISCOUNT;
  }

  // Change code above this line
  return discount;
}

getDiscount(137000);
getDiscount(46900);
getDiscount(8250);
getDiscount(1300);
getDiscount(5000);
getDiscount(20000);
getDiscount(50000);
