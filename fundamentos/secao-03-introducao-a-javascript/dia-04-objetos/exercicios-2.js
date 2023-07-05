const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.

const customerInfo = (fullOrder) => {
  const adress = fullOrder.address;

  let msg = `Olá, ${fullOrder.order.delivery.deliveryPerson}, entrega para: ${fullOrder.name}, Telefone: ${fullOrder.phoneNumber}, ${adress.street}, Número: ${adress.number}, AP: ${adress.apartment}.`;

  return msg;
}

console.log(customerInfo(order));

// Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.
// Modifique o nome da pessoa compradora para Luiz Silva;
// Modifique o valor total da compra para R$ 50,00.



const orderModifier = (fullOrder) => {
  fullOrder.name = 'Luiz Silva';

  pizzas = Object.keys(fullOrder.order.pizza);

  fullOrder.payment.total = 50;
  msg = `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${fullOrder.order.drinks.coke.type} é R$ ${fullOrder.payment.total},00.`;

  return msg;
}

console.log(orderModifier(order));