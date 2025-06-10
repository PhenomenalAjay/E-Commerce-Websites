var sidnav = document.querySelector(".side-navbar");

function shownavbar(){
      sidnav.style.right="0";
}
function closenavbar(){
    sidnav.style.right="-60%";
}

document.getElementById("shop-now-button").addEventListener("click", function() {
    window.location.href = 'collection.html?focusSearch=true';
});
