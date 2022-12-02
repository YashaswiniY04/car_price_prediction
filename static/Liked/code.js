//scroll animations
const target = document.querySelector(".product-wrapper");
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
target.addEventListener("scroll", reveal);

//store shoes info 
var shoes = [
  {
    name: 'Audi',
    price: '$3000.90',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhv4122qABaqncFLhy_LwJermUHVLhX4bM0Q&usqp=CAU",
    //cartImg: '',
  },
  {
    name: 'Aulto',
    price: '$9000',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_NGu131_40UvblC4Px_OQiidC7lMcxRX4PHbW-_e6y0o5ALWW9sRNID10hl6n9ANgSZw&usqp=CAU',
    //cartImg: '',
  },
  {
    name: 'Mustang',
    price: '$12000',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFg-3EN0W2wMM68RB5_3L4aXMbhbapS3ZpXV2lguiKaTAKctumMchLvbCX3R6Z3evlog&usqp=CAU',
    //cartImg: '',
  },
  {
    name: 'Tesla',
    price: '$15000',
    img:"https://content-images.carmax.com/qeontfmijmzv/MY19MKj0XutK084z874jt/9632621fd8464b5c0e54a9dee64ad4e5/tesla.jpg" ,
    //cartImg: '',
  },  
];

//add to cart 
const cart = document.querySelector(".cart-wrapper");
const row = document.querySelectorAll(".row");
const item1Img = document.querySelector("#item1-img");
const item1Name = document.querySelector("#item1-name");
const item1Price = document.querySelector("#item1-price");
const item2Img = document.querySelector("#item2-img");
const item2Name = document.querySelector("#item2-name");
const item2Price = document.querySelector("#item2-price");
const item3Img = document.querySelector("#item3-img");
const item3Name = document.querySelector("#item3-name");
const item3Price = document.querySelector("#item3-price");
const item4Img = document.querySelector("#item4-img");
const item4Name = document.querySelector("#item4-name");
const item4Price = document.querySelector("#item4-price");
var click = 0;


const cartBtn = document.querySelectorAll("#add");
cartBtn.forEach(function(btn) {
  btn.addEventListener('click', function(event) {
    row.forEach(function(r)  {
                  r.style.display = "flex";
                  })
    var pid = event.target.parentElement.parentElement.id;
    switch(pid)
      {
        case "prod1":
          item1Img.setAttribute("style", "background-image: url(" + shoes[0].img + ")");
          item1Name.innerHTML = shoes[0].name;
          item1Price.innerHTML = shoes[0].price;
        break;
          
        case "prod2":
          item2Img.setAttribute("style", "background-image: url(" + shoes[1].img + ")");
          item2Name.innerHTML = shoes[1].name;
          item2Price.innerHTML = shoes[1].price;
        break;
          
       case "prod3":
          item3Img.setAttribute("style", "background-image: url(" + shoes[2].img + ")");
          item3Name.innerHTML = shoes[2].name;
          item3Price.innerHTML = shoes[2].price;
        break;
          
        case "prod4":
          item4Img.setAttribute("style", "background-image: url(" + shoes[3].img + ")");
          item4Name.innerHTML = shoes[3].name;
          item4Price.innerHTML = shoes[3].price;
        break;
          
        default: 
          window.alert("error");
          
      }
  })
});

//delete cart 
const empty = document.querySelector("#delete");
empty.addEventListener('click', function(){
      row.forEach(function(r)  {
                  r.style.visibility = "hidden";
                  })
});

