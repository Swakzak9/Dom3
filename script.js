let cart= document.getElementById('case')

let cartShow=[
  {
    id:"weret7", 
    img:"asset/gas cooker.jpg",
    name: "Gas cooker",
    descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,itaque",
    price:"$ 250",
  }, {
    id:"wertrt", 
    img:"asset/pexels-pixabay-51383.jpg",
    name: "Camera",
    descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,itaque",
    price:"$ 450",
  },{
    id:"ertrui", 
    img:"asset/TV.jpg",
    name: "Tv",
    descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,itaque",
    price:"$ 150",
  },{
    id:"sdsgs", 
    img:"asset/wifi.webp",
    name: "Language translator" ,
    descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,itaque",
    price:"$ 250",
  }];
  basket=[];

let generateCart =(x) => {
    return (cart.innerHTML = cartShow.map((x)=>{
       let{id,img,name,descr,price}= x
     return   `
     <div id="product-id-${id}" class="box1 sec">
        <img src="${img}" width="200px"  alt="gas cooker" />
      <h3>${name}</h3>
      <p>
        ${descr}
        </p>
        <div class="Price">
          <h3>${price}</h3>
        <div class="add-v">
          <i onclick ="increment(${id})" class="fa-solid fa-plus"></i>
        <div id ="${id}"class="priceAmount"><h2>0</h2></div>
        <i onclick = "decrement(${id})" class="fa-solid fa-minus"></i>
      </div></div>
      </div>`
    }) 
     
    .join(""))
};
 generateCart()
 
 let increment =( id)=>{
  let selectedItem = id;
  let search = basket.find((x) =>x.id === selectedItem.id );

  if(search === undefined)  {
    basket.push({
      id:selectedItem.id,
      item: 1,
    }) 
  }
  else{
    search.item +=1
  }
  console.log(basket);
  update(selectedItem.id)
  
 }
 let decrement =(id)=>{
  let selectedItem = id;
  let search = basket.find((x) =>x.id === selectedItem.id );
 if(search === 0) return;

 else{
  search.item -=1

  console.log(basket);
  update(selectedItem.id)
  
}
 
}
  let update =(id)=>{
 let search= basket.find((x)=>x.id === id)
  console.log(search.item)
  document.getElementById(id).innerHTML = search.item
  calculation()
 }
 calculation=()=>{
  cartIcon= document.getElementById('cartAmount')
  cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y) =>x + y,0 )
}