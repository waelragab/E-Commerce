const bars = document.querySelector(".menu");
const menu = document.querySelector("nav ul");
const nav = document.querySelector("nav")

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


        for (product of products) {
            item += `<a href = "product-details.html"> <div class = 'col-4'><img src='${product.image}'><h4>${product.name}</h4> <div class='rate'>
                    <i class="fas fa-star"></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i
                     class='fas fa-star-half-alt'></i>
                    </div><small> $ ${product.price}</small></div>`
            container.innerHTML = item;

            
        }

        

    }
};

xhttp.open("GET", "products.json", true);
xhttp.send();


$(window).scroll(function () {
    if ($(window).scrollTop() >= 30) {
        nav.classList.add("fixed-nav")

    } else {
        nav.classList.remove("fixed-nav")
    }
})