let globalBasePrice = 10000;
let car1 = {
    name: 'BMW m&m',
 basePrice: 50000,
  finalPrice: 60000
};
let car2 = {
    name: 'Chevrolet Corbina', 
    basePrice: 70000, 
    finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
