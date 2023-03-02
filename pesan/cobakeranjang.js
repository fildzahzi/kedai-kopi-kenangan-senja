const product = [
  {
    id: 0,
    image: '../img/menu/expresso.jpg',
    title: 'Americano',
    price: 12,
  },
  {
    id: 1,
    image: '../img/menu/blackcoffe.jpg',
    title: 'Kopi Hitam',
    price: 12,
  },
  {
    id: 2,
    image: '../img/menu/kopisusu.jpg',
    title: 'Kopi Susu',
    price: 12,
  },
  {
    id: 3,
    image: '../img/menu/cappuchino.jpg',
    title: 'Cappucino',
    price: 12,
  },
  {
    id: 4,
    image: '../img/menu/mocachino.jpg',
    title: 'Mochaccino',
    price: 12,
  },
  {
    id: 5,
    image: '../img/menu/matchalatte.png',
    title: 'Matcha Latte',
    price: 13,
  },
  {
    id: 6,
    image: '../img/menu/redvelvedlatte.jpg',
    title: 'Red Velved Latte',
    price: 13,
  },
  {
    id: 7,
    image: '../img/menu/tarolatte.jpg',
    title: 'Taro Latte',
    price: 13,
  },
  {
    id: 8,
    image: '../img/menu/telangtea.jpg',
    title: 'Teh Telang',
    price: 13,
  },
  {
    id: 9,
    image: '../img/menu/bobabrownsugar.jpg',
    title: 'Boba Brown Sugar',
    price: 13,
  },
  {
    id: 10,
    image: '../img/menu/bobamatcha.jpg',
    title: 'Boba Matcha',
    price: 13,
  },
  {
    id: 11,
    image: '../img/menu/bobastrawberry.jpg',
    title: 'Boba Strawberry',
    price: 13,
  },
  {
    id: 12,
    image: '../img/menu/bobataitea.jpg',
    title: 'Boba Thai Tea',
    price: 13,
  },
  {
    id: 13,
    image: '../img/menu/bobataro.jpg',
    title: 'Boba Taro',
    price: 13,
  },
  {
    id: 14,
    image: '../img/menu/milesmatcha.jpg',
    title: 'Matcha Miles Crepes',
    price: 13,
  },
  {
    id: 15,
    image: '../img/menu/milesnutella.jpg',
    title: 'Nutella Miles Crepes',
    price: 13,
  },
  {
    id: 16,
    image: '../img/menu/milesoreo.jpg',
    title: 'Oreo Miles Crepes',
    price: 13,
  },
];

const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
  var { image, title, price } = item;
  return (
    `<div class='box'>
      <div class='img-box'>
        <img class='images' src=${image}></img>
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>${price} K</h2>` +
    "<button onclick = 'addtocart(" + (i++) + ")'>Add to cart</button>" +
    `</div>
    </div>`
  )
}).join('')

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}



function displaycart(a) {
  let j = 0, total = 0;

  document.getElementById("count").innerHTML = cart.length;

  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = 0 + " K";
  } else {
    document.getElementById("cartItem").innerHTML = cart.map((items) => {
      var { image, title, price } = items;
      total = total + price;
      document.getElementById("total").innerHTML = total + " K";
      return (
        `<div class = 'cart-item'>
          <div class = 'row-img'>
            <img class = 'rowimg' src = ${image}>
          </div>
          <p style='font-size:12px;'> ${title}</p>
          <h2 style='font-size:15px;'> ${price} K</h2>` +
        "<i class='fa-regular fa-trash-can' onclick='delElement(" + (j++) + ")'></i></div>"
      );
    }).join('');
  }
}


