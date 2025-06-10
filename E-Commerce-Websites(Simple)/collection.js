//responsive page edit side bar 
var sidnav = document.querySelector(".side-navbar")

function shownavbar(){
      sidnav.style.right="0"
}
function closenavbar(){
    sidnav.style.right="-60%"
}


document.addEventListener("DOMContentLoaded", function() {
    var productContainer = document.getElementById("products");
    var search = document.getElementById("search");
    var productlist = productContainer.querySelectorAll("div");

    search.addEventListener("keyup", function() {
        var enteredvalue = event.target.value.toUpperCase();

        for (var count = 0; count < productlist.length; count++) {
            var productname = productlist[count].querySelector("p").textContent;
            if (productname.toUpperCase().indexOf(enteredvalue) >= 0) {
                productlist[count].style.display = "block"; // Show product
            } else {
                productlist[count].style.display = "none"; // Hide product
            }
        }
    });
});
