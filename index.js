const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "Pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//a)  Las pizzas que tengan un id impar.
const pizzaIdImpar = pizzas.forEach(
(pizza) => {
  if(pizza.id%2 !== 0){
    //console.log(`La ${pizza.nombre}, tiene el ID: ${pizza.id}, que es impar!`);
  }
}
)
pizzaIdImpar;

//b) Responder: ¿Hay alguna pizza que valga menos de $600?
const precioMenos600 = pizzas.forEach(
  (precios) => {
    if(precios.precio < 600){
    //console.log(`La ${precios.nombre} cuesta menos de $600. Esta pizza tiene un precio de $${precios.precio}`);
  }  
}
)
precioMenos600;



//c) El nombre de cada pizza con su respectivo precio.
const pizzaName = pizzas.forEach(
  (pizzeta)=>{
    //console.log(`La ${pizzeta.nombre} cuesta: $${pizzeta.precio}`);
  }
)
pizzaName;



//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). 
//Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" 
//cuyo valor es un array con ingredientes.


const ingredientesPizzas = pizzas.forEach((pizza) => {
  console.log(`Ingredientes de la ${pizza.nombre}:`);
  console.log(pizza.ingredientes.join(", "));
  console.log("**************************************************");
});

ingredientesPizzas;