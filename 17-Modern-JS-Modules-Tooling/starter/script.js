//importing module
// import {addToCart,totalPrice as price,tq} from './shoppingCarts.js'
// console.log(`importing module`);

// addToCart('bread', 12)
// console.log(price,tq)


// import * as ShoppingCart from './shoppingCarts.js' //everything iöport method

// ShoppingCart.addToCart('cake',44);
// console.log(ShoppingCart.totalPrice)

// import add from './shoppingCarts.js' // to add unnamed export one defoult one module
// add('pizza',22) 
// add('apple',23) 
// add('cake',11) 
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');

// const data = await res.json();
// console.log(data);

const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await res.json();
    //console.log(data);
    return { title : data.at(-1).title , text : data.at(-1).body}
}
// const lastPost = getLastPost() // dönüş değeri promise oldugundan then metodu kullanmak gerekiyor
// console.log(lastPost)

// lastPost.then( last => console.log(last)) // birinci yöntem ile promise içindeki veri alınıyor

const lastPost2 = await getLastPost()  // 2. yöntem ile de promise içindeki veri alınır bu da await ile oluyr
console.log(lastPost2)