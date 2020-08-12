const bars = document.querySelector(".menu");
const menu = document.querySelector("nav ul");
const productImage = document.querySelector("#product-img");
const views = document.querySelectorAll(".small-img")
const nav = document.querySelector("nav")



$(window).scroll(function () {
    if ($(window).scrollTop() >= 30) {
        nav.classList.add("fixed-nav")

    } else {
        nav.classList.remove("fixed-nav")
    }
})

bars.addEventListener("click", menuToggle);

function menuToggle() {
    if (menu.style.width == "90%") {
        menu.style.width = "0"
    } else {
        menu.style.width = "90%"
    }
}

var container = document.querySelector(".latest-products .row");
var item = "";


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var products = JSON.parse(xhttp.responseText).products;

        for (var i = 0; i < 4; i++){
            item += `<div class = 'col-4'><img src='${products[i].image}'><h4>${products[i].name}</h4> <div class='rate'>
                <i class="fas fa-star"></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i
                  class='fas fa-star-half-alt'></i>
                 </div>   <small> $ ${products[i].price}</small></div>`
        }
       

        container.innerHTML = item;

    }
};

xhttp.open("GET", "products.json", true);
xhttp.send();


for (view of views) {
    view.addEventListener("click", function () {
        productImage.src = this.src;
    })
}

