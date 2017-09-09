function principal (){
//comienza mapa
var mapProp= {
    center:new google.maps.LatLng(13.8643972, -88.7509086),
    zoom:10,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
//termina mapa

//comienza slider
var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
//fin de slider

}

window.onload=principal;
