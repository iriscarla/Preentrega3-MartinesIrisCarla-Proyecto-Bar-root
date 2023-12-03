const productosCatalogo = [
  { id: 1 , nombre: 'APA', precio: 1500, categoria: 'cerveza', volumenAlcohol: 3.5},
  { id: 2 , nombre: 'IPA', precio: 1200, categoria: 'cerveza', volumenAlcohol: 4.5},
  { id: 3 , nombre: 'GOLDEN', precio: 1000, categoria: 'cerveza', volumenAlcohol: 2.0},
  { id: 4 , nombre: 'RED', precio: 1300, categoria: 'cerveza', volumenAlcohol: 2.7},
  { id: 5 , nombre: 'WINE', precio: 1350, categoria: 'cerveza', volumenAlcohol: 10},
  { id:10 , nombre: 'CLASICAS', precio: 2000, categoria: 'papas'},
  { id:11 , nombre: 'AMERICANAS', precio: 2500, categoria: 'papas'},
  { id:12 , nombre: 'CHEDDAR', precio: 3000, categoria: 'papas'},
  { id:13 , nombre: 'SALCHIPAPAS', precio: 4000, categoria: 'papas'},
  { id:20 , nombre: 'MOZZARELLA', precio: 4479, categoria: 'pizzas'},
  { id:21 , nombre: 'RUCULA', precio: 5000, categoria: 'pizzas'},
  { id:22, nombre: '4 QUESOS', precio: 4800, categoria: 'pizzas'},
  { id:23, nombre: 'NAPOLITANA', precio: 4799, categoria: 'pizzas'}, 
]

const divContenedor = document.querySelector("section#divContenedor");

//Funcion para crear las Cards de forma dinámica en SHOP.html en section con ID #divContenedor
 function crearCard(producto){
    return `
    <div class="card" style="width: 18rem;">
        <img src="../images/blond2.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <a href="#" id="${producto.id}" class="btn btn-primary boton">Añadir al carrito</a>
    </div>
  </div>`}
  
 //Muestar las cards en el HTML con la descripción de cada producto mediante un loop
  function cargarCardsEnHTML (){
  if (productosCatalogo.length>0){
    productosCatalogo.forEach((productoCarta)=>divContenedor.innerHTML+=crearCard(productoCarta))
    hacerClick()
  }
  else{alert('No hay productos disponibles');}
 }

 cargarCardsEnHTML () 


 

//CARRITO
carrito = [];

const carritoCompras = document.querySelector(".carritoImg");
carritoCompras.addEventListener('mousemove', ()=> {
  if(carrito.length >0){
    carritoCompras.title = `tiene ${carrito.length} productos en el carrito`
  }
  else{ carritoCompras.title = 'no hay productos'}
})


//buscador
const form = document.querySelector('form');

form.addEventListener('submit' ,(event)=>{
  event.preventDefault();
})



const buscador = document.querySelector('input#buscador');


buscador.addEventListener('search', ()=> {
 let ingresoTextoUsuario = buscador.value;
  let arrayUsuario = productosCatalogo.filter((producto)=> producto.nombre.toLowerCase().includes(ingresoTextoUsuario));
  console.log(arrayUsuario);

})

//botones

function hacerClick(){
  const clickButton = document.querySelectorAll('a.boton')
  clickButton.forEach((boton) => boton.addEventListener('click', ()=> {
    let selection = productosCatalogo.find((producto) => producto.id === parseInt (boton.id))
    carrito.push(selection);
    const objetoPasadoAJson = JSON.stringify (carrito);
    localStorage.setItem('carritoUsuario', objetoPasadoAJson);
    console.log(selection)

  }))
}



